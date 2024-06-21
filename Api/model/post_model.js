
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
        } catch (error) {
            throw error;
        }
    }

    async getPostsByEmail(email){

        try{
            const query = `SELECT * FROM Posts
                           WHERE email = $1`

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

            const result = await db.any(query, id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getPosts(){
        try{
            const query = `SELECT * FROM Posts`;

            const result = await db.any(query);
            return result;
        } catch (error) {
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
        } catch (error) {
            throw error;
        }
    }

    async editPostById(id, nome_usuario, sobrenome_usuario, email, conteudo){
        try{
            const query = `UPDATE Posts
                           SET nome_usuario = $2, sobrenome_usuario = $3, email = $4, conteudo = $5
                           WHERE id = $1
                           RETURNING *`
            const values = [id, nome_usuario, sobrenome_usuario, email, conteudo];

            const result = await db.oneOrNone(query,values);
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new PostModel();