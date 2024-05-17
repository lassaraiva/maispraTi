//Multiplicar uma matrizM(6,6) por um valor A, botando os valores em um vetorV(36).

let prompt = require('prompt-sync')();

function multiplicarMatrizPorValor(matrizM, A) {
    let vetor = [];

    for (let i = 0; i < matrizM.length; i++) {
        for (let j = 0; j < matrizM[i].length; j++) {
            let resultado = matrizM[i][j] * A;
            vetor.push(resultado);
        }
    }

    return vetor;
}

function main() {
    let matrizM = [];
    for (let i = 0; i < 6; i++) {
        matrizM[i] = [];
        for (let j = 0; j < 6; j++) {
            let valor = parseFloat(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matrizM[i][j] = valor;
        }
    }
/* Se preferir, use a matriz pré-definida abaixo:
let matrizM = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
]; */

function imprimirMatriz(matrizM) {
    for (let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i]);
    }
}    
  
    console.log('====================================');
    console.log('Matriz lida:');
    imprimirMatriz(matrizM);
    let A = parseFloat(prompt('Informe o valor de A: '));
    let vetorV = multiplicarMatrizPorValor(matrizM, A);
    console.log('Vetor V:',vetorV);
}
main();