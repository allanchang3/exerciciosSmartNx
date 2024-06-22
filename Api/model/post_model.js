
const db = require("../database/db");

class PostModel{
    async createPost(nome_usuario, sobrenome_usuario, email, conteudo){
        try{
            const query =`INSERT INTO Posts (nome_usuario, sobrenome_usuario, email, conteudo)
                          VALUES ($1, $2, $3, $4)
                          RETURNING id`;
            
            const values = [nome_usuario, sobrenome_usuario, email, conteudo];

            const result = await db.one(query, values);

            return result.id;
        }catch (error){
            throw error;
        }
    }

    async getPostsByEmail(email){

        try{
            const query = `SELECT * FROM Posts
                           WHERE email = $1
                           ORDER BY data_criacao`

            const result = await db.any(query, email)

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getPostById(id){
        try{
            const query = `SELECT * FROM Posts
                           WHERE id = $1`;

            const post = await db.oneOrNone(query, id);
            return post;
        }catch (error){
            throw error;
        }
    }

    async getPosts(){
        try{
            const query = `SELECT * FROM Posts
                           ORDER BY data_criacao`;

            const posts = await db.any(query);
            return posts;
        }catch (error){
            throw error;
        }
    }

    async deletePostById(id){
        try{
            const query = `DELETE FROM Posts
                           WHERE id = $1
                           RETURNING id`;

            const result = await db.oneOrNone(query, id);
            return result;
        }catch (error){
            throw error;
        }
    }

    async editPostById(id, conteudo){
        try{
            const query = `UPDATE Posts
                           SET conteudo = $2
                           WHERE id = $1
                           RETURNING *`
            const values = [id, conteudo];

            const result = await db.oneOrNone(query,values);
            return result;
        }catch (error){
            throw error;
        }
    }

    async verifyPostId(id){
        try{
            const query = 'SELECT id FROM Posts WHERE id = $1';
            const post = await db.oneOrNone(query, id);
            return post !== null;
        }catch (error){
            throw error;
        }
    }

}

module.exports = new PostModel();