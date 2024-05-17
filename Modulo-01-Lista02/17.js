/* Ler o nome e a idade de 9 pessoas, guardar os dados em dois vetores, em posições relacionadas. Mostar
uma listagem contendo apenas os dados das pessoas menores de idade. */

let prompt = require('prompt-sync')();

function colherDados(i) {
    let nome = prompt(`Informe o nome da ${i+1}ª pessoa: `);
    let idade = parseInt(prompt(`Informe a idade da ${i+1}ª pessoa: `));
    return {nome, idade};
}

function menores(nomes, idades) {
    console.log('===================================');
    console.log('Pessoas menores de idade: ');
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`${nomes[i]}, ${idades[i]} anos`);
        }
    }
}

function main() {
    let nomes = [];
    let idades = [];

    for (let i = 0; i < 9; i++) {
        let pessoa = colherDados(i);
        nomes.push(pessoa.nome);
        idades.push(pessoa.idade);
    }

    menores(nomes, idades);
}
main();