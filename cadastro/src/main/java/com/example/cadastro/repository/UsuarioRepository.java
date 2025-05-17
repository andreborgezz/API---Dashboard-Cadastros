package com.example.cadastro.repository;

import com.example.cadastro.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}
// Esta interface define um repositório para a entidade Usuario, estendendo JpaRepository para fornecer operações CRUD.
// Também inclui um método para encontrar um usuário pelo endereço de e-mail, retornando um Optional<Usuario> para lidar com casos em que o usuário pode não existir.