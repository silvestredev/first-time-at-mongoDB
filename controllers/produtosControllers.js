//importando model
const Produto = require('../models/Produto');

//exportando class com métodos
module.exports = class produtoController{
    static async showProdutos(req, res){
        const produtos = await Produto.find().lean(); //lean para o handlebars conseguir ler os dados recebidos

        res.render('produtos/all', {produtos});
    };

    static createProdutos(req, res){
        res.render('produtos/create');
    };

    static async createPost(req, res){
        const nome = req.body.nome;
        const imagem = req.body.imagem;
        const preco = req.body.preco;
        const descricao = req.body.descricao;

        //criando documentos(dados) e salvando
        const produto = new Produto({nome, imagem, preco, descricao});

        await produto.save();

        res.redirect('/produtos');
    }

     static async produto(req, res){
        const id = req.params.id;

        const produto = await Produto.findById(id).lean();

        res.render('produtos/produto', {produto});
    }

     static async remove(req, res){
        const id = req.params.id;

        await Produto.deleteOne({_id: id});

        res.redirect('/')
    }

    static async edit(req, res){
        const id = req.params.id;
        const produto = await Produto.findById(id).lean();

        res.render('produtos/edit', {produto})
    }

    static async editPost(req, res){ //atualizar informações
        const id = req.body.id; //vem no input hidden
        //infos que vem no body
        const nome = req.body.nome;
        const imagem = req.body.imagem;
        const preco = req.body.preco;
        const descricao = req.body.descricao;

        const produto = {nome, imagem, preco, descricao}; //tem que ser na ordem do constructor
        
        await Produto.updateOne({_id: id}, produto);

        res.redirect('/');
    }
};