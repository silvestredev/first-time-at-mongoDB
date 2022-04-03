const express = require('express');
const router = express.Router();

//import controller
const produtosController = require('../controllers/produtosControllers');

//rotas
router.get('/', produtosController.showProdutos);
//create
router.get('/create', produtosController.createProdutos);
router.post('/create', produtosController.createPost);
//produto
router.get('/:id', produtosController.produto);
//edit
router.get('/edit/:id', produtosController.edit)
router.post('/edit', produtosController.editPost);
//remove
router.post('/remove/:id', produtosController.remove);


module.exports = router;