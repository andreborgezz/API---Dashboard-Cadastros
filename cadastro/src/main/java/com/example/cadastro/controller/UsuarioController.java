package com.example.cadastro.controller;

import com.example.cadastro.dto.LoginRequest;
import com.example.cadastro.model.Usuario;
import com.example.cadastro.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = usuarioService.authenticate(loginRequest);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login realizado com sucesso!");
        } else {
            return ResponseEntity.status(401).body("Email ou senha inválidos.");
        }
    }

    @PostMapping("/cadastro")
    public ResponseEntity<String> register(@RequestBody Usuario usuario) {
        usuarioService.registerUsuario(usuario);
        return ResponseEntity.ok("Usuário cadastrado com sucesso!");
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getAllUsuarios() {
        List<Usuario> usuarios = usuarioService.getAllUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUsuario(@PathVariable Long id) {
        boolean deleted = usuarioService.deleteUsuario(id);
        if (deleted) {
            return ResponseEntity.ok("Usuário deletado com sucesso!");
        } else {
            return ResponseEntity.status(404).body("Usuário não encontrado.");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioAtualizado) {
        boolean updated = usuarioService.updateUsuario(id, usuarioAtualizado);
        if (updated) {
            return ResponseEntity.ok("Usuário atualizado com sucesso!");
        } else {
            return ResponseEntity.status(404).body("Usuário não encontrado.");
        }
    }
}
