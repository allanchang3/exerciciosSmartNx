const PostModel = require('../model/post_model');

const CommentValidation = async(req,res,next)=>{

    const {nome_usuario, sobrenome_usuario, email, comentario, post_id} = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nome_usuario)
        return res.status(400).json({error: 'Nome é obrigatório.'});
    else if(!sobrenome_usuario)
        return res.status(400).json({error: 'Sobrenome é obrigatório.'});
    else if(!email)
        return res.status(400).json({error: 'Email é obrigatório.'});
    else if(!emailRegex.test(email))
        return res.status(400).json({ error: 'Email inválido.' });
    else if(!comentario)
        return res.status(400).json({error: 'Inserir um comentário é obrigatório.'});
    else if(!post_id)
        return res.status(400).json({error: 'A escolha de um post é obrigatória.'});
    else{

        try{
            const postExists = await PostModel.verifyPostId(post_id);

            if(!postExists){
                return res.status(400).json({error: 'Não é possivel adicionar um comentário caso o post não exista.'});
            }
        }catch (error){
            console.error('Erro na verificação de existência do post_id', erro);
            res.status(500).json({error: 'Erro ao verificar a existência do post'});
        }
        
    }

    next();

}

module.exports = CommentValidation;