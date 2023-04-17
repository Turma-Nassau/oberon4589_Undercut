const bodyParser = require("body-parser");
const express = require("express"); 
const app = express();  
PORT = 8000;





// configurações

  // bodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

  // swagger
    swaggerFile = require("./server_docs.json"),
    swaggerUi = require("swagger-ui-express")

// fim de configurações


//Rotas


  // Documentação das minhas rotas
    app.use('/documento',swaggerUi.serve, swaggerUi.setup(swaggerFile))


  // Principal
  app.get('/', function(req,res){
    res.send('principal')
  })


  // adcionar noticias
    app.get('/postagens', function(req,res){
    res.render('postagens')
  })


   // informações da empresa
    app.get('/informacoes', function(req, res){
        res.send('Quem somos')
    })

  // rota pra receber os dados do formulario
    //Recebidos
    // ao trabalhar com o envio de formulário do método POST é importante alterar o tipo da rota para POST




//Fim das rotas


// Servidor
 // é importante deixar ele por último
   app.listen(PORT, function() {   
       console.log(`Servidor rodando na porta ${PORT}`);

});
// fim servidor