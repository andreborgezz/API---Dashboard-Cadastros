# API Cadastro - Java Spring Boot com MySQL

Este projeto implementa uma API completa de **cadastro e login de usuários**, desenvolvida com Java Spring Boot. Após o login, os usuários são listados em um dashboard visual feito com HTML, CSS e JavaScript.

> A API é **demonstrativa**, sem autenticação real. Ideal para estudos e portfólio pessoal.

---

## 🛠 Tecnologias Utilizadas

- Java 17 (Spring Boot
- MySQL
- Maven
- HTML, CSS, JavaScript 

---

## 🚀 Funcionalidades

- `POST /usuarios` → Cadastra um novo usuário  
- `POST /login` → Simula login (validação simples por e-mail e senha)  
- `GET /usuarios` → Lista todos os usuários cadastrados  
- `PUT /usuarios/{id}` → Atualiza os dados de um usuário  
- `DELETE /usuarios/{id}` → Remove um usuário do sistema  

---

## 📦 Exemplo de Requisições

### ▶️ Criar usuário

**POST /usuarios**

![image](https://github.com/user-attachments/assets/f28f6ef6-c436-46d2-8c58-a33821a000f5)

---

### ▶️ Listar todos os usuários

**GET /usuarios**

![image](https://github.com/user-attachments/assets/97c0d814-3657-4eb8-847c-5c6d3a915c11)

---

### ▶️ Atualizar usuário

**PUT /usuarios/1**

![Imagem do WhatsApp de 2025-05-17 à(s) 02 05 56_8221b8a5](https://github.com/user-attachments/assets/85490d9f-a66c-41ab-81e2-031d89433bdc)

![Imagem do WhatsApp de 2025-05-17 à(s) 02 05 57_fed7a5cf](https://github.com/user-attachments/assets/e759a663-a319-4143-aacb-e6abd6e793e4)

![Imagem do WhatsApp de 2025-05-17 à(s) 02 05 04_dc7ad930](https://github.com/user-attachments/assets/0eeea0f4-eb9a-4710-b6c6-22faf98bc958)




### ▶️ Deletar usuário

![Imagem do WhatsApp de 2025-05-17 à(s) 02 06 26_1cbff6ef](https://github.com/user-attachments/assets/b8c47e37-9cb7-4d25-b968-6d29e44d1dba)
![Imagem do WhatsApp de 2025-05-17 à(s) 02 06 26_659f29b2](https://github.com/user-attachments/assets/836b2cc7-76c5-4201-a16c-49c899bd1008)


---

## 📷 Exemplo do Dashboard

![image](https://github.com/user-attachments/assets/0bf63f58-6002-4f92-86bd-6c29e206d1b9)

---

## 💻 Como rodar localmente

### Requisitos

- Java 17+
- MySQL rodando
- Maven instalado

### Passos

1. **Clone o projeto**

```bash
git clone https://github.com/seu-usuario/cadastro.git
cd cadastro
```

4. **Rode o projeto**

```bash
mvn spring-boot:run
```

5. **Abra o dashboard**

Navegue até a pasta `/frontend` e abra o `cadastro.html` no navegador.

---
## Contato

Feito por **André Borges** • [LinkedIn](https://www.linkedin.com/in/andre-borgess/) • Sorocaba/SP  
Projeto de portfólio utilizando Java + Spring Boot + MySQL + Front-end básico

---
