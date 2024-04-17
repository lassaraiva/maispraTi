// Ler dois valores (diferentes) e exibi-los em ordem crescente.

const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt('Informe o primeiro valor: '));
let valor2 = parseFloat(prompt('Informe o segundo valor: '));
console.log('====== Ordem crescente ======')

if(valor1 > valor2){
    console.log(valor2 + '\n' + valor1);
}else{
    console.log(valor1 + '\n' + valor2);
}