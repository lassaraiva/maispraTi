/*Algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, 
respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.*/

let prompt = require('prompt-sync')();

function somaLinha(matrizM) {
    let vetorSL = [];

    for (let i = 0; i < matrizM.length; i++) {
        let somaLinhas = 0;
        for (let j = 0; j < matrizM[i].length; j++) {
            somaLinhas += matrizM[i][j];
        }
        vetorSL.push(somaLinhas);
    }

    return vetorSL;
}

function somaColuna(matrizM) {
    let vetorSC = [];

    for (let j = 0; j < matrizM[0].length; j++) {
        let somaColuna = 0;
        for (let i = 0; i < matrizM.length; i++) {
            somaColuna += matrizM[i][j];
        }
        vetorSC.push(somaColuna);
    }

    return vetorSC;
}

function main() {
   let matrizM = [];
    for (let i = 0; i < 5; i++) {
        matrizM[i] = [];
        for (let j = 0; j < 5; j++) {
            let valor = parseFloat(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matrizM[i][j] = valor;
        }
    }
 /* Se preferir, use a matriz pré-definida abaixo:
    let matrizM = [
        [8, 4, 3, 9, 6],
        [1, 5, 7, 10, 2],
        [4, 10, 6, 2, 7],
        [3, 9, 8, 5, 1],
        [7, 2, 1, 6, 4]
      ]; */

    function imprimirMatriz(matrizM) {
        for (let i = 0; i < matrizM.length; i++) {
            console.log(matrizM[i]);
        }
    }
    console.log('====================================');
    console.log('Matriz lida:');
    imprimirMatriz(matrizM);
    let vetorSL = somaLinha(matrizM);
    console.log('Vetor SL:', vetorSL);

    let vetorSC = somaColuna(matrizM);
    console.log('Vetor SC:', vetorSC);
}
main();