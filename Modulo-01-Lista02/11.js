//Leitura do primeiro termo e da razão da PA, os 10 primeiros números e soma da sequência.

let prompt = require('prompt-sync')();

let primeiroTermo = parseFloat(prompt('Informe o primeiro termo da PA: '));
let razao = parseFloat(prompt('Informe a razão da PA: '));
let pa = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    pa.push(termo);
    soma += termo;
}

console.log('Os 10 primeiros números da PA são:');
for (let i = 0; i < pa.length; i++) {
    console.log(pa[i]);
}
console.log('A soma dos valores é: ' + soma);
