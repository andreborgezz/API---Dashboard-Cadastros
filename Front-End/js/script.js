// Login form handler
document.querySelector('.login-box form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.querySelector('input[type=email]').value;
  const senha = document.querySelector('input[type=password]').value;

  try {
    const response = await fetch('http://localhost:8081/api/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    if (response.ok) {
      window.location.href = 'indice.html';
    } else {
      alert('Email ou senha inválidos.');
    }
  } catch (error) {
    console.error('Erro ao conectar com a API:', error);
    alert('Erro ao conectar com a API.');
  }
});

// Registration form handler
document.querySelector('.login-box form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const nome = document.querySelector('input[type=nome]').value;
  const email = document.querySelector('input[type=email]').value;
  const senha = document.querySelector('input[type=password]').value;

  try {
    const response = await fetch('http://localhost:8081/api/usuarios/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, senha })
    });

    if (response.ok) {
      window.location.href = 'indice.html';
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  } catch (error) {
    console.error('Erro ao conectar com a API:', error);
    alert('Erro ao conectar com a API.');
  }
});
