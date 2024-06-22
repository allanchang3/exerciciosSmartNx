const PostValidation = async(req,res,next)=>{

    const {nome_usuario, sobrenome_usuario, email, conteudo} = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nome_usuario)
        return res.status(400).json({error: 'Nome é obrigatório.'});
    else if(!sobrenome_usuario)
        return res.status(400).json({error: 'Sobrenome é obrigatório.'});
    else if(!email)
        return res.status(400).json({error: 'Email é obrigatório.'});
    else if(!emailRegex.test(email))
        return res.status(400).json({ error: 'Email inválido.' });
    else if(!conteudo)
        return res.status(400).json({error: 'Inserir um comentário é obrigatório.'});

    next();

}

module.exports = PostValidation;