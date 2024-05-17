/* algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. */

let prompt = require('prompt-sync')();

function buscarMaiorElementoNaLinha(matriz) {
    let maioresElementos = [];
    for (let i = 0; i < matriz.length; i++) {
        let maiorElementoLinha = matriz[i][0];
        for (let j = 1; j < matriz[i].length; j++) {
            if (Math.abs(matriz[i][j]) > Math.abs(maiorElementoLinha)) {
                maiorElementoLinha = matriz[i][j];
            }
        }
        maioresElementos.push(maiorElementoLinha);
    }
    return maioresElementos;
}

function dividirPeloMaiorNaLinha(matriz) {
    let maioresElementos = buscarMaiorElementoNaLinha(matriz);
    let matrizModificada = [];

    for (let i = 0; i < matriz.length; i++) {
        let linhaDividida = [];

        for (let j = 0; j < matriz[i].length; j++) {
            let elementoDividido = matriz[i][j] / maioresElementos[i];
            linhaDividida.push(elementoDividido);
        }
        matrizModificada.push(linhaDividida);
    }

    return matrizModificada;
}

function main() {
    let matriz = [];
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 13; j++) {
            let valor = parseFloat(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matriz[i][j] = valor;
        }
    }
   /* Se preferir, use a matriz pré-definida abaixo:
    let matriz =  [
          [9, 14, -10, -3, 5, -7, 11, 12, 6, 10, -3, 6, 1],
          [2, -9, 7, 11, 4, 13, 7, 14, 3, 15, -5, 4, 10],
          [-8, 6, 13, -4, 8, -2, 9, 11, 7, -1, 6, 3, 11],
          [-3, 1, 12, 5, 6, -2, 11, 4, 7, 9, 14, 10, -13],
          [6, 7, -9, 12, -10, 8, 3, 2, -4, 1, 14, 5, 13],
          [8, 3, 11, 1, -15, 5, 9, 14, 6, -2, 12, 8, -7],
          [14, 7, 4, -11, 5, 6, 8, 9, -13, 2, 1, 15, 10],
          [12, 9, 3, 7, 14, -10, 2, 11, 5, 8, 4, 6, 13],
          [5, 10, -4, 1, 11, 6, 14, 2, -9, 7, 8, 3, 12],
          [13, 8, -6, 1, 15, -12, 10, 9, 2, -11, 7, 3, 5],
          [9, 14, 5, 8, -6, 3, 7, 10, 1, 12, 2, 4, -11],
          [1, 5, 13, 9, 11, 10, 8, -3, 4, 2, 7, 14, 6]
        ]; */
      
    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i]);
        }
    }
    console.log('====================================');
    console.log('Matriz lida:');
    imprimirMatriz(matriz);

    console.log('\nMatriz modificada:\n');
    let matrizModificada= dividirPeloMaiorNaLinha(matriz);
    for (let i = 0; i < matrizModificada.length; i++) {
    let linha = matrizModificada[i].map(elemento => elemento.toFixed(2));
    console.log(linha); 
}
}
main();