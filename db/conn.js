const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/moongose');
    console.log('Conectado!');
};

main() //executando a func
.catch((err) => console.log(err));

module.exports = mongoose;