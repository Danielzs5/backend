// 1. importar framework
const express = require("express");

// 2. criar uma instancia de aplicação
const app = express();

// Criar um middleware
app.get('/', (req, res) => {
    res.send("DM É PERONFAS");
});

// 3. iniciar a aplicação 
app.listen(3000, ()=>{
    console.log("App está on")
})