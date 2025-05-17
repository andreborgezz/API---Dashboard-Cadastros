package com.example.cadastro.dto;

public class LoginRequest {
    private String email;
    private String senha;

    // Getters e Setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
}
// Esta classe representa um pedido de login, contendo os campos de e-mail e senha.
// Os métodos getters e setters permitem acessar e modificar esses campos. É uma parte fundamental do processo de autenticação, onde o usuário fornece suas credenciais para acessar o sistema.