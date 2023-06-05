# Contacts-API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Conectando Database](#33-conectando-database)
- [Documentação](#4-documentação)
  - [Rota /users](#41-rota-/users)
  - [Rota /login](#42-rota-/login)
  - [Rota /contacts](#43-rota-/contacts)

---

## 1. Visão Geral

O objetivo dessa API e fazer um gerenciamento de contatos, onde pode se cadastrar um usuário que pode ter muitos contatos associados a ele.

Algumas das tecnologias usadas foram:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](db_diagram.png)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3 Conectando database

Após instalar as dependencias utilize o comando para iniciar a database:

```shell
yarn dev
```

---

## 4. Documentação

[ Voltar para o topo ](#tabela-de-conteúdos)

URL base:

```
http://localhost:3001/
```

### 4.1. Rota /users

1- post /users:

Rota responsável por cadastrar um novo usuário.

Exemplo de requisição

```
{
	"name": "Jorje",
	"email": "jorje@mail.com",
	"phone": 99999999,
	"password": "1234"
}
```

Exemplo de resposta

```
{
   "created_at": "2023-03-28T20:00:18.807Z",
	"phone": 99999999,
	"email": "jorje@mail.com",
	"name": "Jorje",
	"id": "0056047c-fe40-491a-b576-3da5aad7b9fd"
}
```

2- get /users:

Rota responsável por listar todos os usuários. (Token necessário)

exemplo de resposta

```
[
	{
		"created_at": "2023-03-27T20:11:43.104Z",
		"phone": 9999999,
		"email": "jorje@mail.com",
		"name": "Jorje",
		"id": "22eda5c1-20bf-4bc4-8db0-8dfdd03d6777"
	},
	{
		"created_at": "2023-03-28T19:31:58.770Z",
		"phone": 999999999,
		"email": "jao@mail.com",
		"name": "jao",
		"id": "576e4fe6-6e84-4dbc-b92f-8b4727a59501"
	},
	{
		"created_at": "2023-03-28T20:00:18.807Z",
		"phone": 99999999,
		"email": "maria@mail.com",
		"name": "Maria",
		"id": "0056047c-fe40-491a-b576-3da5aad7b9fd"
	}
]
```

3- get /users/profile:

Rota responsável por mostrar as informação de usuário logado. (Token necessário)

Exemplo de resposta

```
{
	"created_at": "2023-03-28T19:31:58.770Z",
	"phone": 999999999,
	"email": "Jorje@mail.com",
	"name": "Jorje",
	"id": "576e4fe6-6e84-4dbc-b92f-8b4727a59501"
}
```

4- patch /users:

Rota responsável por atualizar as informções do usuário logado. (Token necessário)

Exemplo de requisição

```
{
	"phone": 9999988,
	"email": "jorje2@mail.com",
	"name": "Jorje Algusto"
}
```

Exemplo de resposta

```
{
	"created_at": "2023-03-27T20:11:43.104Z",
	"phone": 9999988,
	"email": "jorj2@mail.com",
	"name": "Jorje Algusto",
	"id": "22eda5c1-20bf-4bc4-8db0-8dfdd03d6777"
}
```

5- delete /users:

Rota responsável por deletar o usuário logado. (Token necessário)

Essa rota não recebe uma resposta.

### 4.2. Rota /login

1- post /login:

Rota responsavel por retornar um token de validação.

Exemplo de requisição

```
{
	"email": "Jorje@mail.com",
	"password": "1234"
}
```

Exemplo de resposta

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODA0ODk5MTgsImV4cCI6MTY4MDU3NjMxOCwic3ViIjoiNTc2ZTRmZTYtNmU4NC00ZGJjLWI5MmYtOGI0NzI3YTU5NTAxIn0.y6t-XwKYbL_y_Nn3Rp8TDtpCXpqhnUEMof8F4Og0HU8"
}
```

### 4.3 Rota /contacts

1- post /contacts:

Rota responsável por cadastrar um novo contato ao usuário logado. (Token necessário)

Exemplo de requisição

```
{
	"name": "marcio",
	"email": "marcio@mail.com",
	"phone": 382618734
}
```

Exemplo de resposta

```
{
	"created_at": "Mon Apr 03 2023 00:01:12 GMT-0300 (Horário Padrão de Brasília)",
	"phone": 382618734,
	"user": {},
	"email": "marcio@mail.com",
	"name": "marcio",
	"id": "59a9e3a7-6721-488e-acbe-e38b9b48b3ac"
}
```

2- get /contacts:

Rota responsável por listar todos os contatos do usuário logado. (Token necessário)

Exemplo de resposta

```
[
	{
		"created_at": "Sun Apr 02 2023 23:56:52 GMT-0300 (Horário Padrão de Brasília)",
		"phone": 82618734,
		"email": "marcio@mail.com",
		"name": "marcio",
		"id": "fd5130ee-8134-467a-a8ba-d586b0d29ca3"
	},
	{
		"created_at": "Mon Apr 03 2023 00:49:27 GMT-0300 (Horário Padrão de Brasília)",
		"phone": 12742348,
		"email": "jorje@mail.com",
		"name": "Jorje",
		"id": "b835b614-cc17-47aa-a14e-c664a412e103"
	}
]
```

3- get /contacts/id:

Rota responsável por mostrar as informações de um contato passando seu id na requisição. (Necessário token e ser dono do contato)

Exemplo de resposta

```
{
	"id": "b09b34d4-9ec0-426e-98cb-f83caebf9b9c",
	"name": "marcio",
	"email": "marcio@mail.com",
	"phone": 382618734,
	"created_at": "2023-05-04T19:34:05.451Z",
	"user": {
		"id": "05cf2d48-fee3-4888-a987-d1a6f0b7a8d1",
		"name": "Jorje",
		"email": "jorje@mail.com",
		"phone": 6325372,
		"password": "$2a$10$bczaSquuRtKSJry2TgmzyuodGE5FyXi1Km07sG1IWty7qHDjc0T.y",
		"created_at": "2023-05-04T17:41:11.846Z"
	}
}
```

4- patch /contacts/id:

Rota responsável por por atualizer as informações de um contato passando seu id na requisição. (Necessário token e ser dono do contato)

Exemplo de requisição

```
{
	"name": "marcio2",
	"phone": 88888889,
    "email": ""
}
```

Exemplo de resposta

```
{
	"created_at": "Tue Mar 28 2023 15:59:18 GMT-0300 (Horário Padrão de Brasília)",
	"user": {},
	"phone": 88888889,
	"email": "marcio2@mail.com",
	"name": "marcio2",
	"id": "94fe37a0-7147-42e4-9196-e1a51b02f80c"
}
```

5- delete /contacts/id:

Rota responsável por deletar um contato passando seu id na requisição. (Necessário token e ser dono do contato)

Essa rota não recebe resposta.

[ Voltar para o topo ](#tabela-de-conteúdos)
