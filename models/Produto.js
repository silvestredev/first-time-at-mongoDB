const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const Produto = mongoose.model(
    'Produto', //nome do Schema(model);
    new Schema({ //criando e definindo as config do Schema
        nome: {type: String, required: true},
        imagem: {type: String, required: true},
        preco: {type: Number, required: true},
        descricao: {type: String, required: true},
    }),
);

module.exports = Produto;