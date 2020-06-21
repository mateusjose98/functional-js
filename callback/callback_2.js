const fs = require('fs');
const path = require('path');


const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

// lendo o arquivo de forma assíncrona
fs.readFile(caminho, exibirConteudo)

