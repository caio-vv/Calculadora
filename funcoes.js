function Adicao(a, b) {
    return a + b
}

function Multiplicacao(a, b) { 
    return a * b
}

function Subtracao(a, b) {
    return a - b
}

function Divisao(a, b) {
    return a / b
}

function opcao() {
    const prompt = require('prompt-sync')();
    prompt("digite a opcao ")
}

module.exports = {Adicao, Multiplicacao, Subtracao, Divisao, opcao}
