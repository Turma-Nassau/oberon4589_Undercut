const swagger_auto_gen = require("swagger-autogen")

const outputFile = "./server_docs.json"
const endpointsFiles = ["./server.js"]


const doc = {
    info: {
        title: "Minhas rotas",
        descrição: "Site de notícias",
    },
    host: "localhost:8000",
    schemes: ["http"],
}


swagger_auto_gen(outputFile, endpointsFiles, doc);