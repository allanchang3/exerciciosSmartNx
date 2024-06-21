CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(255) NOT NULL,
    sobrenome_usuario VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    conteudo TEXT 
);

CREATE TABLE IF NOT EXISTS Comentarios (
    id SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(255) NOT NULL,
    sobrenome_usuario VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    comentario TEXT NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES Posts(id)    
);