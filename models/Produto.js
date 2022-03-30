//importando db
const conn = require('../db/conn');

const {ObjectId} = require('mongodb');

class Produto {
    constructor(nome, imagem, preco, descricao){ //obj com propriedades iniciais
        this.nome = nome;
        this.imagem = imagem;
        this.preco = preco;
        this.descricao = descricao;
    };

    //salvar dados
    save(){ 
        const produto = conn.db().collection('produtos').insertOne({ //criando collection no db e inserindo dados
            nome: this.nome,
            imagem: this.imagem,
            preco: this.preco,
            descricao: this.descricao,
        });

        return produto;
    };

    //resgatar dados
    static getProduto(){ 
        const produto = conn.db().collection('produtos').find().toArray() //resgatando os dados e os transformando em um array
        return produto;
    };

    //resgatar dado específicos
    static async getProdutoById(id){
        const produto = await conn
        .db()
        .collection('produtos')
        .findOne({_id: ObjectId(id)}); //metodo para transformar o id em um obj valido
        
        return produto;
    }

    //remover produto
    static async remove(id){
        await conn
        .db()
        .collection('produtos')
        .deleteOne({_id: ObjectId(id)});

        return;
    }

    //atualizar produto
    updateProduto(id){
        conn
         .db()
         .collection('produtos')
         .updateOne({_id: ObjectId(id)}, {$set: this}); //set é operador que nesse caso nos permite att todo o obj
       
        return;
    }
};

module.exports = Produto;