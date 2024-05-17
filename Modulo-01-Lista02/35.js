/*Ler um conjunto de 30 valores eos colocar em dois vetores conforme forem pares ou ímpares. O tamanho do
vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo
dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias. */

let prompt = require('prompt-sync')();

function main() {
    let vetorPar = [];
    let vetorImpar = [];

    for (let i = 0; i < 30; i++) {
        let valor = parseFloat(prompt(`Informe o ${i + 1}º valor: `));

        if (valor % 2 === 0) {
            vetorPar.push(valor);
            if (vetorPar.length === 5) {
                console.log('O vetor de números pares está cheio:', vetorPar);
                console.log('Zerando vetor...');
                vetorPar.length = 0;
            }
        } else {
            vetorImpar.push(valor);
            if (vetorImpar.length === 5) {
                console.log('O vetor de números ímpares está cheio:', vetorImpar);
                console.log('Zerando vetor...');
                vetorImpar.length = 0;
            }
        }
    }
    console.log('\nConteúdo final dos vetores:');
    console.log('Vetor de números pares:', vetorPar);
    console.log('Vetor de números ímpares:', vetorImpar);
}
main();
