## 💬Descrição  
Projeto criado para a matéria de Códigos de Alta Performance Web. Site de notícias da F1.
## :racing_car: Funcionalidades
- O usuário poderá criar uma conta assim podendo receber email relacionados ao conteúdo do site, verá as noticias mais recentes do mundo da F1, tabela do campeonato de pilotos e construtores assim como data e horário das próximas corridas.
## 💻Finalidade
- Ter um ambiente onde fãs do esporte possam ter de tudo em um único espaço, com o site limpo e sem muita complicação, abas faceis de navegar e bastante intuitivo.
## 🤖Tecnologias usadas
- HTML
- CSS
- JavaScript
- Node.js
## 📂Atualizações futuras
- Futuramente com novos implementos o site terá mais informações sobre categorias de base da F1, como a F2 e F3 contendo o mesmo conteúdo como notícias, tabela do campeonato só que da categoria escolhida.
## 👤Dev
- Oberon Inácio Silva
## ⏳Status
- Work in progress

### Estrutura de Dados
 
 * Fazer login e criar um novo usuário 
 ~~~ MySql
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

}); 

~~~~

### Postagem

  * Postagens das noticias do site
  ~~~~MySql
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
   ~~~~
