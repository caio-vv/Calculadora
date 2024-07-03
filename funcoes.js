const prompt = require('prompt-sync')();

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
function Porcentagem (a, b){
    return (a / b) * 100;
}

module.exports = {Adicao, Multiplicacao, Subtracao, Divisao, Porcentagem}

/* if (isNaN(numero1) || isNaN(numero2)){
    console.log("Não é um numero, invalido")
 } else {
 console.log("Resultado: " + funcoes.Adicao(numero1, numero2))
 } */