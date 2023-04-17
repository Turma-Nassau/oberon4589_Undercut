const bd = require('./database')


const Postagem = bd.sequelize.define('postagens' , {

    titulo: {
        type: bd.Sequelize.STRING
    },

    conteudo: {
        type: bd.Sequelize.STRING
    },
    
    categoria: {
        type: bd.Sequelize.STRING
    }
})

module.exports = Postagem;


//essa linha server para criar a nossa tabela

//Postagem.sync({force: true})