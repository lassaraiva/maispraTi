/*Ler o numero de eleitores, votos brancos, nulos e validos. Calcular o
percentual representativo de cada um dos tipos de voto no total de eleitoes.*/

const prompt = require('prompt-sync')();

let totalEleitores = parseInt(prompt('Informe o número total de eleitores: '));
let votosBrancos = parseInt(prompt('Informe o número de votos brancos: '));
let votosNulos = parseInt(prompt('Informe o número de votos nulos: '));
let votosValidos = parseInt(prompt('Informe o número de votos validos: '));

let porcentagemBrancos = (votosBrancos * 100)/totalEleitores;
let porcentagemNulos = (votosNulos * 100)/totalEleitores;
let porcentagemValidos = (votosValidos * 100)/totalEleitores;

console.log ('================================================');
console.log('Percentual de votos brancos:', porcentagemBrancos +'%');
console.log('Percentual de votos nulos:', porcentagemNulos +'%');
console.log('Percentual de votos válidos:', porcentagemValidos +'%');
