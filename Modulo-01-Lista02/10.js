/*Utilizando a estrutura "do-while", ler vários números. A cada laço, perguntar se quer continuar ou não.
Nao final, exibir: a)somatório de todos os valores;
b)menor valor digitado;
c)média entre todos os valores;
d)quantos valores são pares. */

let prompt = require('prompt-sync')();

let numeros = [];
let soma = 0;
let ehPar = 0;
let menorNumero;

do {
    let numero = parseFloat(prompt('Informe um número: '));
    numeros.push(numero);
    soma += numero;

    if (numeros.length === 1 || numero < menorNumero) {
        menorNumero = numero;
    }

    let encerrar = prompt('Deseja adicionar mais um número? (S/N): ').toUpperCase();
    if (encerrar === 'N') {
        break;
    }
} while (true);

let media = soma / numeros.length;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        ehPar++;
    }
}

console.log('==============================================');
console.log('a) A soma de todos os valores digitados é: ' + soma);
console.log('b) O menor valor digitado foi: ' + menorNumero);
console.log('c) A média dos valores digitados é: ' + media.toFixed(2));
console.log('d) Há ' + ehPar + ' número(s) par(es)');

