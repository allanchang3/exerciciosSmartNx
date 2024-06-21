const PostModel = require("../model/post_model");

class PostController{

    async create(req, res){
        const {nome_usuario, sobrenome_usuario, email, conteudo} = req.body;

        try{
            const postId = await PostModel.createPost(nome_usuario, sobrenome_usuario, email, conteudo);
            res.status(200).json({id: postId, message: 'Post criado com sucesso !'});
        }catch(error){
            console.error('Erro ao criar o post:', error);
            res.status(500).json({error: 'Erro ao criar o post.'});
        }
    
    }

    async getByEmail(req, res){
        const email = req.params.email;

        try{
            const posts = await PostModel.getPostsByEmail(email);
            res.status(200).json(posts);
        }catch(error){
            console.error('Erro ao achar posts pelo email:', error);
            res.status(500).json({error: 'Erro ao buscar os posts do email.'});
        }

    }

    async getById(req, res){
        const id = req.params.id;

        try{
            const posts = await PostModel.getPostById(id);
            res.status(200).json(posts);
        }catch(error){
            console.error('Erro ao achar posts pelo id:', error);
            res.status(500).json({error: 'Erro ao buscar os posts do id.'});
        }

    }

    async getPosts(req, res){

        try{
            const posts = await PostModel.getPosts();
            res.status(200).json(posts);
        }catch(error){
            console.error('Erro ao achar os posts.', error);
            res.status(500).json({error: 'Erro ao buscar os posts.'});
        }

    }

    async deletePostById(req, res){

        const id = req.params.id;

        try{
            const result = await PostModel.deletePostById(id);
            console.log(result);
            res.status(200).json('Post de id: ' + result.id + ' apagado com sucesso.');
        }catch(error){
            console.error('Erro ao apagar o post.', error);
            res.status(500).json({error: 'Erro ao apagar o post.'});
        }
    }

    async editPostById(req, res){
        const id = req.params.id;
        const {nome_usuario, sobrenome_usuario, email, conteudo} = req.body;

        try{
            const result = await PostModel.editPostById(id, nome_usuario, sobrenome_usuario, email, conteudo);
            res.status(200).json({message: "Post editado com sucesso!", novo_post: result});
        }catch(error){
            console.error('Erro ao editar o post o post.', error);
            res.status(500).json({error: 'Erro ao editar o post.'});
        }
    }

}

module.exports = new PostController;