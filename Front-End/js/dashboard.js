// Elementos do DOM
const tabelaUsuarios = document.getElementById('tabela-usuarios');
const totalUsuariosElement = document.getElementById('total-usuarios');
const refreshBtn = document.getElementById('refresh-btn');
const searchInput = document.getElementById('search-input');
const loadingElement = document.getElementById('loading');
const errorMessageElement = document.getElementById('error-message');

// Array para armazenar todos os usuários
let todosUsuarios = [];

// Função para buscar os usuários do backend e exibi-los na página
async function fetchUsuarios() {
    try {
        // Mostrar indicador de carregamento
        loadingElement.style.display = 'block';
        errorMessageElement.style.display = 'none';
        
        const response = await fetch('http://localhost:8081/api/usuarios');
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários: ' + response.status);
        }
        
        const usuarios = await response.json();
        todosUsuarios = usuarios; // Armazenar todos os usuários
        
        // Atualizar contador
        totalUsuariosElement.textContent = usuarios.length;
        
        // Exibir usuários
        exibirUsuarios(usuarios);
        
        // Esconder indicador de carregamento
        loadingElement.style.display = 'none';
    } catch (error) {
        console.error('Erro:', error);
        loadingElement.style.display = 'none';
        errorMessageElement.textContent = 'Falha ao carregar dados: ' + error.message;
        errorMessageElement.style.display = 'block';
    }
}

// Função para exibir os usuários na tabela
function exibirUsuarios(usuarios) {
    tabelaUsuarios.innerHTML = '';

    if (usuarios.length === 0) {
        const linha = document.createElement('tr');
        linha.innerHTML = '<td colspan="5" style="text-align: center;">Nenhum usuário encontrado</td>';
        tabelaUsuarios.appendChild(linha);
        return;
    }

    usuarios.forEach(usuario => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.senha || 'N/A'}</td>
            <td>
                <button class="action-btn" onclick="editarUsuario(${usuario.id})">✏️</button>
                <button class="action-btn delete-btn" onclick="excluirUsuario(${usuario.id})">🗑️</button>
            </td>
        `;
        tabelaUsuarios.appendChild(linha);
    });
}

// Função para filtrar usuários
function filtrarUsuarios() {
    const termo = searchInput.value.toLowerCase();
    
    if (!termo) {
        exibirUsuarios(todosUsuarios);
        return;
    }
    
    const usuariosFiltrados = todosUsuarios.filter(usuario => 
        usuario.nome.toLowerCase().includes(termo) || 
        usuario.email.toLowerCase().includes(termo)
    );
    
    exibirUsuarios(usuariosFiltrados);
}

// Funções para editar e excluir (apenas simulações)
async function editarUsuario(id) {
    const usuario = todosUsuarios.find(u => u.id === id);
    if (!usuario) {
        alert('Usuário não encontrado!');
        return;
    }

    const novoNome = prompt('Novo nome:', usuario.nome);
    if (novoNome === null) return; // Cancelado

    const novoEmail = prompt('Novo email:', usuario.email);
    if (novoEmail === null) return; // Cancelado

    try {
        const response = await fetch(`http://localhost:8081/api/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: novoNome,
                email: novoEmail
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar usuário: ' + response.status);
        }

        alert('Usuário atualizado com sucesso!');
        fetchUsuarios();
    } catch (error) {
        alert('Falha ao atualizar usuário: ' + error.message);
    }
}

async function excluirUsuario(id) {
    if (confirm(`Tem certeza que deseja excluir o usuário com ID: ${id}?`)) {
        try {
            const response = await fetch(`http://localhost:8081/api/usuarios/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Erro ao excluir usuário: ' + response.status);
            }
            alert(`Usuário ${id} excluído com sucesso!`);
            fetchUsuarios();
        } catch (error) {
            alert('Falha ao excluir usuário: ' + error.message);
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', fetchUsuarios);
refreshBtn.addEventListener('click', fetchUsuarios);
searchInput.addEventListener('input', filtrarUsuarios);