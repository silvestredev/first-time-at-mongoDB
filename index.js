const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//importando o db
const conn = require('./db/conn');

//importando models
const Produto = require('./models/Produto');

//importando controllers
const produtosController = require('./controllers/produtosControllers');

//importando routes
const produtosRoutes = require('./routes/produtosRoutes');

//handlebars config
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine());

//definindo arquivos publicos
app.use(express.static('public'));

//config para ler o que vem na req
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json()); //receber em json

//middle para gerenciar rotas depois do '/produtos'
app.use('/produtos', produtosRoutes);
//
app.use('/', produtosRoutes);

app.listen(3000);