const prompt = require('prompt-sync')();
const funcoes = require("./funcoes")
let operacao = prompt("Selecione a operação (+, -, /, % ou *): ")
let numero1;
let numero2;

switch (operacao) {
    case "+":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o segundo numero: "))
        console.log("Resultado: " + funcoes.Adicao(numero1, numero2))
        break;
    case "-":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o segundo numero: "))
        console.log("Resultado: " + funcoes.Subtracao(numero1, numero2))
        break;
    case "/":
        numero1 = Number(prompt("Digite o dividendo: "))
        numero2 = Number(prompt("Digite o divisor: "))
        console.log("Resultado: " + funcoes.Divisao(numero1, numero2))
        break;

    case "%":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o segundo numero: "))
        console.log("Resultado: ")
        break;
    case "*":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o multiplicador: "))
        console.log("Resultado: " + funcoes.Multiplicacao(numero1, numero2))
        break;
}