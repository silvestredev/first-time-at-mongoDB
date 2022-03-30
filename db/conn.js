const {MongoClient} = require('mongodb'); //obj para conectar com o db

const uri = 'mongodb://localhost:27017/dbmongodb'; //definindo nome e local do db
const client = new MongoClient(uri); //MongoClient nos permite fazer conexões com o MongoDB

async function run(){ //executando o mongoDB
    try {
        await client.connect();
        console.log('Conectado ao mongoDB!');

    } catch (error) {
        console.log(error);
    };
};

run();//executando a func para estar conectado e exportar.

module.exports = client;