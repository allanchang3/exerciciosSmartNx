# Exercicios SmartNx

## Instruções de Execução

Este repositório contém soluções para diversos exercícios em JavaScript puro. Cada exercício está implementado em um arquivo separado na pasta `Exercicios`.

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir de [nodejs.org](https://nodejs.org/).

### Como Executar

1.Clone o repositório:
   ```bash
   git clone https://github.com/allanchang3/exerciciosSmartNx.git
   ```

2.Navegue até o diretório do repositório:
   ```bash
   cd Exercicios
   ```

3.Navegue até o diretório do exercício desejado e execute o arquivo com node.

   Para executar os exercícios, use os seguintes comandos:

   node ex1.js
   node ex2.js
   node ex3.js
   node ex4.js
   node ex5.js
   node ex6.js
   node ex7.js
   node ex8.js
   node ex9.js
   node ex10.js
   node ex11.js
   node ex12.js


# Api SmartNx

## Instruções de Execução

Este é um projeto básico usando Node.js como backend e PostgreSQL como banco de dados. O projeto inclui operações CRUD básicas para posts e comentários, usando pg-promise como interface para o PostgreSQL.

## Requisitos

Para executar este projeto localmente, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Instalação

1.Clone o repositório:

   ```bash
   git clone https://github.com/allanchang3/exerciciosSmartNx.git
   ```

2.Instale as dependências:

   Navegue até o diretório do projeto e execute o seguinte comando para instalar todas as dependências listadas no package.json:
   ```bash
   npm install
   ```

3.Configuração do Banco de Dados

   Crie um banco de dados PostgreSQL.
   Configure as credenciais de acesso ao banco de dados no arquivo `Api/database/db.js`

## Execução

Após instalar as dependências e configurar o banco de dados, você pode iniciar o servidor:
   ```bash
   npm start
   ```

O servidor estará disponível em http://localhost:3000 por padrão.

## Endpoints da API

### Posts

GET /posts/get : Retorna todos os posts.
GET /posts/get/id/:id : Retorna um post específico pelo ID.
GET /posts/get/email/:email : Retorna os posts de um email X;
POST /posts/post : Cria um novo post.
PUT /posts/put/:id : Atualiza o conteúdo de um post existente.
DELETE /posts/delete/:id: Deleta um post e seus comentários associados.

### Comentários

GET /comments/get : Retorna todos os comentários.
GET /comments/id/:id : Retorna um comentário específico pelo ID.
GET /comments/id_post/:post_id : Retorna os comentários de um post X;
POST /comments/post : Cria um novo comentário.
PUT /comments/put/:id : Atualiza um comentários existente.
DELETE /comments/delete/:id: Deleta um comentário.

### Exemplos de uso:

**Criação de um Post:**

   POST /posts/post
   {
      "nome_usuario": "fulano",
      "sobrenome_usuario": "da silva",
      "email": "fulano@example.com",
      "conteudo": "Lorem ipsum dolor sit amet"
   }

**Criação de um Comentário:**

   POST /comments/post
   {
      "nome_usuario": "ciclano",
      "sobrenome_usuario": "souza",
      "email": "ciclano@example.com",
      "comentario": "Ótimo post!",
      "post_id": 1
   }


