//1. Importar o framework
const express = require("express");

//2. Criar uma instância da aplicação
const app = express();

const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ];
  

//middleware embutido ou integrado
app.use(express.json());

app.use('/tarefas',router);
//middleware de roteeamento

//Criar um middleware
app.get("/", (req, res) => {
  res.send("Olá");
});

//middleware de erro
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
  
});

//3. Iniciar a aplicação em uma porta
app.listen(8080, () => {
  console.log("App está On!");
}); 
