const db = require("../database/db");

class CommentModel{
    async createComment(nome_usuario, sobrenome_usuario, email, comentario, post_id){
        try{
            const query =`INSERT INTO Comentarios (nome_usuario, sobrenome_usuario, email, comentario, post_id)
                          VALUES ($1, $2, $3, $4, $5)
                          RETURNING id`;
            
            const values = [nome_usuario, sobrenome_usuario, email, comentario, post_id];

            const comment = await db.one(query, values);

            return comment.id;
        }catch (error){
            throw error;
        }
    }

    async getCommentById(id){
        try{
            const query = `SELECT * FROM Comentarios
                           WHERE id = $1`;

            const comment = await db.oneOrNone(query, id);
            return comment;
        }catch (error){
            throw error;
        }
    }

    async getComments(){
        try{
            const query = `SELECT * FROM Comentarios
                          ORDER BY data_criacao`;

            const comments = await db.any(query);
            return comments;
        }catch (error){
            throw error;
        }
    }

    async deleteCommentById(id){
        try{
            const query = `DELETE FROM Comentarios
                           WHERE id = $1
                           RETURNING id`;

            const comments = await db.oneOrNone(query, id);
            return comments;
        }catch (error){
            throw error;
        }
    }

    async editCommentById(id, comentario){
        try{
            const query = `UPDATE Comentarios
                           SET comentario = $2
                           WHERE id = $1
                           RETURNING *`
            const values = [id, comentario];

            const result = await db.oneOrNone(query,values);
            return result;
        }catch (error){
            throw error;
        }
    }

    async getCommentsByPostId(post_id){
        try{
            const query = `SELECT * FROM Comentarios
                           WHERE post_id = $1
                           ORDER BY data_criacao`;
        
            const comments = await db.any(query, post_id);
            return comments;
        }catch (error){
            throw error;
        }
    }

}

module.exports = new CommentModel();