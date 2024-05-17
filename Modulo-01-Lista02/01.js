//Calcular a redução do tempo de vida de um fumante. Ele perde 10min de vida por cigarro.

let prompt = require('prompt-sync')();

let qntCigarros = parseInt(prompt('Informe a quantidade de cigarros fumados por dia: '));
let qntAnos = parseInt(prompt('Informe por quantos anos fumou: '));

let reducaoVida = ((qntCigarros*10) * (qntAnos*365))/1440;
console.log('Você poderá perder '+reducaoVida.toFixed(0)+' dias de vida!');