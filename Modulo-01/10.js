//Ler um número inteiro e escrevê-lo 10 vezes.

let prompt = require('prompt-sync')();

let numero = parseInt(prompt('Informe um número inteiro: '));

for(let i = 0; i < 10; i++){
    console.log(numero);
}