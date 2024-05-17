//Ler um vetor A[100], retirar valores nulos e negativos, criando um vetor B.

let prompt = require('prompt-sync')();

function compactarVetor(vetor) {
    let vetorB = [];
    for (let i = 0; i < vetor.length; i++) {
        if (!isNaN(vetor[i]) && vetor[i] !== null && vetor[i] > 0) {
            vetorB.push(vetor[i]);
        }
    }
    return vetorB;
}

function main() {
    let vetorA = [];
    for (let i = 0; i < 100; i++) {
        let elemento = parseFloat(prompt(`Informe o ${i+1}º elemento do vetor: `));
        vetorA.push(elemento);
    }
    /* Se preferir, use o vetor pré-definido abaixo:
    let vetorA = [3, 8, 14, 5, 0, 12, 9, 2, NaN, 6, -1, -5, 0, -10, 20, 25, 0, 30, 40, -15, 50, -20, 60, 70, 0, 80, -25, 90, -30, 1, 11, 0, 12, 13, -35, -40, 0, 14, -45, 15, 16, 0, -50, -55, NaN, 18, 0, -6, 19, 2, -65, 21, 0, 22, -70, 23, 24, 0, -75, -8, 25, 26, 0, 27, -85, 28, -90, 29, 30, 0, -95, -100, 31, 32, 0, -15, 33, 34, -11, 35, 0, 36, 37, -15, 38, 39, 0, -12, NaN, -125, 41, 42, 0, -13, 43, 44, 0, 45, -35, -14, 46, 40, 0, -45, 84, NaN, -15];*/
    
    console.log('Vetor A:', vetorA);
    let vetorB = compactarVetor(vetorA);
    console.log('Vetor B:', vetorB);
}
main();