//importando model
const Produto = require('../models/Produto');

//exportando class com métodos
module.exports = class produtoController{
    static async showProdutos(req, res){
        const produtos = await Produto.getProduto();

        res.render('produtos/all', {produtos});
    };

    static createProdutos(req, res){
        res.render('produtos/create');
    };

    static createPost(req, res){
        const nome = req.body.nome;
        const imagem = req.body.imagem;
        const preco = req.body.preco;
        const descricao = req.body.descricao;

        //criando documentos(dados) e salvando
        const produto = new Produto(nome, imagem, preco, descricao);
        produto.save();

        res.redirect('/produtos');
    }

    static async produto(req, res){
        const id = req.params.id;

        const produto = await Produto.getProdutoById(id);

        res.render('produtos/produto', {produto});
    }

    static async remove(req, res){
        const id = req.params.id;

        await Produto.remove(id);

        res.redirect('/')
    }

    static async edit(req, res){
        const id = req.params.id;
        const produto = await Produto.getProdutoById(id);

        res.render('produtos/edit', {produto})
    }

    static async editPost(req, res){ //atualizar informações
        const id = req.body.id; //vem no input hidden
        //infos que vem no body
        const nome = req.body.nome;
        const imagem = req.body.imagem;
        const preco = req.body.preco;
        const descricao = req.body.descricao;

        const produto = new Produto(nome, imagem, preco, descricao); //tem que ser na ordem do constructor
        
        await produto.updateProduto(id);

        res.redirect('/');
    }
};