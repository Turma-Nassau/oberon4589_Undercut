const bd = require('./database')


const Usuario = bd.sequelize.define('usuarios', {

    nome: {
        type: bd.Sequelize.STRING(30)
    },

    sobrenome: {
        type: bd.Sequelize.STRING(30)
    },

    email: {
        type: bd.Sequelize.STRING(50)
    },

    senha: {
        type: bd.Sequelize.STRING(30)
    },

    usuarios: {
        type: bd.Sequelize.NUMERIC(2)
    }

})

module.exports = Usuario;




//Usuario.sync({Force: true}) 

