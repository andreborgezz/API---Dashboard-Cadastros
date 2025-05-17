package com.example.cadastro.service;

import com.example.cadastro.dto.LoginRequest;
import com.example.cadastro.model.Usuario;
import com.example.cadastro.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public boolean authenticate(LoginRequest loginRequest) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(loginRequest.getEmail());
        return usuario.isPresent() && usuario.get().getSenha().equals(loginRequest.getSenha());
    }

    public void registerUsuario(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public boolean deleteUsuario(Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public boolean updateUsuario(Long id, Usuario usuarioAtualizado) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);
        if (usuarioExistente.isPresent()) {
            Usuario usuario = usuarioExistente.get();
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setEmail(usuarioAtualizado.getEmail());
            usuario.setSenha(usuarioAtualizado.getSenha());
            usuarioRepository.save(usuario);
            return true;
        }
        return false;
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
    
}
