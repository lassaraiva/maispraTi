//Ler 7 nomes, guardar em um vetor e imprimir na ordem inversa.

let prompt = require('prompt-sync')();

let nomes = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt('Informe um nome: ');
    nomes.push(nome);
}
nomes.reverse();
console.log('Nomes inseridos, na ordem inversa: ');
console.log(nomes);