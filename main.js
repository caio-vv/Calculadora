const prompt = require('prompt-sync')();
const funcoes = require("./funcoes")
let operacao = prompt("Selecione a operação (+, -, /, % ou *): ")
let numero1;
let numero2;

while (true){
    if (operacao === "+" || operacao === "-" || operacao === "/" || operacao === "%" || operacao === "*"){

switch (operacao) {
    case "+":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o segundo numero: "))
        if (isNaN(numero1) || isNaN(numero2)){
            console.log("Numero Invalido")
        } else {
        console.log("Resultado: " + funcoes.Adicao(numero1, numero2))
        process.exit()
        }
        break;
    case "-":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o segundo numero: "))
        if (isNaN(numero1) || isNaN(numero2)){
            console.log("Numero Invalido")
        } else {
        console.log("Resultado: " + funcoes.Subtracao(numero1, numero2))
        process.exit()
        }
        break;
    case "/":
        numero1 = Number(prompt("Digite o dividendo: "))
        numero2 = Number(prompt("Digite o divisor: "))
        if (isNaN(numero1) || isNaN(numero2)){
            console.log("Numero Invalido")
        } else {
        console.log("Resultado: " + funcoes.Divisao(numero1, numero2))
        process.exit()
        }
        break;

    case "%":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o segundo numero: "))
        if (isNaN(numero1) || isNaN(numero2)){
            console.log("Numero Invalido")
        } else {
        console.log("Resultado: " + funcoes.Porcentagem(numero1, numero2) + "%")
        process.exit()
        }
        break;
    case "*":
        numero1 = Number(prompt("Digite o primeiro numero: "))
        numero2 = Number(prompt("Digite o multiplicador: "))
        if (isNaN(numero1) || isNaN(numero2)){
            console.log("Numero Invalido")
        } else {
        console.log("Resultado: " + funcoes.Multiplicacao(numero1, numero2))
        process.exit()
        }
        break;
        
}
} else {
    console.log("operacao invalida")
    process.exit()
}
}