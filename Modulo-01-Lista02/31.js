/*algoritmo que leia um número inteiro A e uma matriz V(30,30) de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

let prompt = require('prompt-sync')();

function main() {
    let matrizV = [];
    for (let i = 0; i < 30; i++) {
        matrizV[i] = [];
        for (let j = 0; j < 30; j++) {
            let valor = parseInt(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matrizV[i][j] = valor;
        }
    }
 /* Se preferir, use a matriz pré-definida abaixo:
    let matrizV =[ 
 [ 5, 13, 21, 30,  9, 17, 24,  6,  3, 29, 11, 18, 22, 14,  2, 20, 15,  8, 12, 23, 19,  4, 26, 10, 16,  1, 28,  7, 25, 27],
 [12,  3,  5, 16, 14, 20, 28, 27, 25,  1,  7,  9,  4,  8, 11, 30, 17, 13, 21, 10,  6, 18, 29, 23,  2, 24, 19, 22, 26, 15],
 [ 8, 24,  6, 15, 30,  2, 20,  5,  9, 17, 12, 13,  1, 11, 18, 23, 26,  4, 29, 21, 14, 27, 19,  3, 25, 22, 16, 10, 28,  7],
 [29, 11,  1, 27, 25,  7, 18, 22, 28, 24, 21, 26,  4,  2, 20, 16, 30,  5,  8, 13, 23, 14,  6,  9, 12, 15,  3, 10, 19, 17],
 [14, 28, 30,  8, 17, 11, 29, 19,  6, 13,  2,  7,  5, 10, 27,  3, 22, 23, 12, 21,  1, 18, 26, 20, 16, 25, 15,  9, 24,  4],
 [22,  4, 19, 21,  1, 30, 15, 18, 13, 26, 14, 20, 11, 12,  9, 28,  8,  6,  5,  7, 29, 27, 24,  2, 17, 16, 23, 10, 25,  3],
 [23, 17, 14, 29,  4, 16,  2, 12, 28,  8, 24, 25, 20,  5, 19,  1, 10, 21, 18, 26,  6,  3,  7, 15, 11,  9, 13, 22, 27, 30],
 [ 9,  1, 13, 20, 16,  3, 27, 23, 19, 12,  4, 30, 14,  8, 24, 17, 26, 11,  5,  7, 28, 18,  2, 21, 15, 29, 22,  6, 10, 25],
 [11, 26, 18, 23,  7, 21, 22,  2,  4,  9, 10,  5, 29,  1,  6, 27, 12, 30,  3, 13, 25, 20,  8, 28, 14, 24, 15, 19, 16, 17],
 [19,  6, 12, 10,  2,  5, 30, 20, 26,  4,  1, 16, 22,  7, 23,  9, 11, 29, 14, 28, 13, 27,  3, 24, 17, 21, 25,  8, 15, 18],
 [ 2, 20,  8, 14, 19, 25,  5,  1, 18, 15,  3, 11,  9, 17, 30, 22,  6, 12, 26, 16,  4, 13, 27, 10, 29,  7, 23, 24, 21, 28],
 [28, 12,  7,  1, 13, 26, 21,  3, 17, 11, 23, 15, 19, 30, 22,  2, 27,  8,  4,  9, 10,  5, 25, 20, 24, 18, 29, 14,  6, 16],
 [10, 23,  9, 26, 22, 14,  8,  7, 12,  5, 25, 28,  1,  4,  6,  3, 19, 13, 17, 18, 30,  2, 20, 16, 27, 15, 29, 21, 11, 24],
 [24, 30, 28,  6,  3,  9, 23, 17, 11, 25, 16, 29,  2, 26, 12, 15,  4, 20, 14, 19, 18, 21, 13, 22,  8, 10, 27,  1,  5,  7],
 [13, 15,  4, 18, 10, 29, 17, 27,  1,  3, 19,  6, 28, 23, 25,  7,  9, 26, 30,  8, 20, 12, 16, 11,  5,  2, 24, 14, 22, 21],
 [17,  7, 22,  9, 11,  8, 12, 30, 15, 21, 26,  4,  6, 20, 16, 25, 14,  1, 13,  2,  3, 29, 23, 19, 18, 28, 10, 27,  5, 24],
 [ 6,  9, 24, 25, 15,  4, 13, 10, 30, 14, 17, 19,  3,  7,  8,  1,  5, 22,  2, 12, 27, 11, 29, 26, 21, 20, 16, 23, 18, 28],
 [25, 21, 29, 19,  8, 24,  6, 28, 27, 22, 30, 12,  7,  3, 13, 18, 17,  9, 20, 11, 16, 15,  5,  1, 10, 14,  2,  4, 23, 26],
 [20, 27,  2, 17, 26, 22, 14,  4, 23, 16, 13,  8, 25, 19,  3, 11, 18,  5, 28, 29, 12,  7, 21, 15, 30,  1,  9,  6, 24, 10],
 [30, 19, 10,  7, 23, 12,  9, 15, 20,  2, 18, 27, 24, 22,  1,  5,  3,  6, 17, 14, 25, 16, 11, 13, 28, 26,  4, 29,  8, 21],
 [16, 25, 20, 11, 12, 28, 26, 14,  7,  6,  8, 18, 30, 27,  4, 10, 21, 24, 15, 22,  5, 23,  1,  3, 13, 29, 17, 19,  9,  2],
 [21, 14, 15,  5,  6, 13, 16, 29, 22, 23,  9,  2, 10, 28, 19,  8, 25,  3, 27,  1, 17, 12, 30, 18,  4, 11, 26, 24,  7, 20],
 [ 3, 16, 23, 13,  4, 17, 25,  9,  5, 27, 22, 10, 18,  6,  7, 19, 24, 30, 11, 15,  2, 26,  1, 29, 20, 28, 12, 14, 21,  8],
 [ 7, 18, 25, 22, 24, 10, 11, 21, 16, 28, 20,  3, 27,  8, 15, 13, 23, 19, 29,  4, 30,  5,  9, 12,  6, 17,  2,  1, 26, 14],
 [18, 29,  3,  2, 28,  1, 22, 13, 10,  7, 27,  6, 26, 25,  4, 30,  8, 17, 24, 20,  9, 15, 12, 11, 14, 19, 21,  5, 23, 16],
 [15, 22, 11, 24, 20, 27, 19, 26, 17, 18,  2, 14, 21, 16,  1,  4,  7, 28, 25,  8,  3, 10, 29,  5,  9, 12, 30, 13,  6, 23],
 [27,  5, 26, 28, 21,  3, 10, 25, 29, 20, 17,  9, 12,  2, 14, 24, 13,  8, 19,  6, 11,  7, 18, 30, 23,  4,  1, 16, 15, 22],
 [ 4,  8, 16, 12, 18, 15,  1, 16,  2,  5, 28, 24,  8, 13, 21, 29, 20, 14,  7, 17, 22,  6, 30, 25, 19, 23, 11, 18,  3,  9],
 [26, 13, 17,  4,  5, 18,  7, 11,  3, 19, 12, 23, 20, 15, 26, 13, 16, 29, 10, 30,  1, 25, 28,  9,  2,  6,  8, 21, 22, 27],
 [ 1, 10, 27,  3,  6, 23, 24, 12, 15, 30,  8, 13, 17,  5, 29,  2,  9, 25, 22,  4, 26, 20, 16,  7, 11, 18, 19, 28, 14, 21],
]; */

function imprimirMatriz(matrizV) {
    for (let i = 0; i < matrizV.length; i++) {
        console.log(matrizV[i]);
    }
}

function valoresIguais(matrizV, A) {
    let cont = 0;
    for (let i = 0; i < matrizV.length; i++) {
        for (let j = 0; j < matrizV[i].length; j++) {
            if (matrizV[i][j] === A) {
                cont++;
            }
        }
    }
    return cont;
}

function criarMatrizX(matrizV, A) {
    let matrizX = [];
    for (let i = 0; i < matrizV.length; i++) {
        matrizX[i] = [];
        for (let j = 0; j < matrizV[i].length; j++) {
            if (matrizV[i][j] !== A) {
                matrizX[i][j] = matrizV[i][j];
            }
        }
    }
    return matrizX;
}

    console.log('Matriz V:');
    imprimirMatriz(matrizV);
    let A = parseInt(prompt('Informe o valor de A: '));
    let contValoresIguais = valoresIguais(matrizV, A);
    console.log(`Quantidade de valores iguais a ${A} na matriz V: ${contValoresIguais}`);
    let matrizX = criarMatrizX(matrizV, A);
    console.log('Matriz X:');
    imprimirMatriz(matrizX);
}
main();