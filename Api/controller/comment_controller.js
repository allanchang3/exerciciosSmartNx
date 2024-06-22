const CommentModel = require('../model/comment_model');

class CommentController{

    async create(req, res){
        const {nome_usuario, sobrenome_usuario, email, comentario, post_id} = req.body;

        try{
            const commentId = await CommentModel.createComment(nome_usuario, sobrenome_usuario, email, comentario, post_id);
            res.status(200).json({id: commentId, message: 'Comentário criado com sucesso !'});
        }catch(error){
            console.error('Erro ao criar o comentario:', error);
            res.status(500).json({error: 'Erro ao criar o comentário.'});
        }
    
    }

    async getById(req, res){
        const id = req.params.id;

        try{
            const comments = await CommentModel.getCommentById(id);
            res.status(200).json(comments);
        }catch(error){
            console.error('Erro ao achar o comentário pelo id:', error);
            res.status(500).json({error: 'Erro ao buscar os posts do id.'});
        }

    }

    async getComments(req, res){

        try{
            const comments = await CommentModel.getComments();
            res.status(200).json(comments);
        }catch(error){
            console.error('Erro ao achar os comentários.', error);
            res.status(500).json({error: 'Erro ao buscar os comentários.'});
        }

    }

    async deleteCommentById(req, res){

        const id = req.params.id;

        try{
            const result = await CommentModel.deleteCommentById(id);
            console.log('Comentário de id: ' + result.id + ' apagado com sucesso.');
            res.status(200).json('Comentário de id: ' + result.id + ' apagado com sucesso.');
        }catch(error){
            console.error('Erro ao apagar o comentário.', error);
            res.status(500).json({error: 'Erro ao apagar o comentário.'});
        }
    }

    async editCommentById(req, res){
        const id = req.params.id;
        const { comentario} = req.body;

        try{
            const result = await CommentModel.editCommentById(id, comentario);
            res.status(200).json({message: "Comentário editado com sucesso!", novo_comentário: result});
        }catch(error){
            console.error('Erro ao editar o comentário.', error);
            res.status(500).json({error: 'Erro ao editar o comentário.'});
        }
    }

    async getCommentsByPostId(req, res){
        const post_id = req.params.post_id;

        try{
            const comments = await CommentModel.getCommentsByPostId(post_id);
            res.status(200).json(comments);
        } catch (error) {
            console.error('Erro ao obter os comentários do post.', error);
            res.status(500).json({error: 'Erro ao obter os comentários do post.'});
        }
    }

}

module.exports = new CommentController;