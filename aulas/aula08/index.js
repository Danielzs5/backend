const readline = require("readline-sync");
const conectar = require("./database")

let db;
let collection;

async function inserir(nomeTarefa) {
    const resultado = await collection.insertOne({
        nome: nomeTarefa,
        concluida: false
    });
    console.log("Tarefa criada com sucesso", resultado);
}

async function Buscar(nomeTarefa) {
    const resultado = await collection.findOne({nome: nomeTarefa});
    console.log(resultado);
}

async function alterar(nomeTarefa) {
    const resultado = await collection.updateOne;(
    {nome: nomeTarefa},
    {$set: {nomeAtual, concluida: concluidaAtual}}
);
console.log(resultado);
}

async function alterar(nomeTarefa) {
    const resultado = await collection.deleteOne({nome: nomeTarefa});
    console.log(resultado);
}

async function main() {
    db = await conectar();
    collection = db.collection("tarefas")
    
}

async function main() {
    while (true) {
        console.log("MENU PRINCIPAL");
        console.log("1 - Criar tarefa");
        console.log("2 - Buscar tarefa");
        console.log("3 - Alterar tarefa");
        console.log("4 - Remover tafera");
        console.log("5 - Sair");

        const opcao = readline.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1":{ 
                const nome = readline.question("Informe o nome da tarefa: ");
                await inserir(nome); 
                break;
}
            case "2":{ 
                const nome = readline.question("Informe o nome da tarefa: ");
                awaitbuscar(nome);
                break;
}
            case "3":{ 
                const nome = readline.question("Informe o nome da tarefa: ");
                const concluidaAtual = readline.question("Informe a outra situação da tarefa: ");
                await alterar(nome, nomeAtual, concluidaAtual);
                break;
}
            case "4":{
                const nome = readline.question("Informe o nome da tarefa: ");
                await remover(nome);
                break;
}
            case "5": process.exit(0);
            default: console.groupCollapsed("Opção invalida");
        }
    }
}
main();