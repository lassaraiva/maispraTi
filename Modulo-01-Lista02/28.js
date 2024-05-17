// Receber matriz 10x10 e somar elementos: a)acima da diagonal principal; b)abaixo da diagonal principal.

let prompt = require('prompt-sync')();

function elementosAcimaDaDiagonal(matriz) {
    let somarElementosAcima = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i < j) {
                somarElementosAcima += matriz[i][j];
            }
        }
    }

    return somarElementosAcima;
}

function elementosAbaixoDaDiagonal(matriz) {
    let somarElementosAbaixo = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i > j) {
                somarElementosAbaixo += matriz[i][j];
            }
        }
    }

    return somarElementosAbaixo;
}

function main() {
   let matriz = [];
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            let valor = parseFloat(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matriz[i][j] = valor;
        }
    }
       /* Se preferir, use a matriz pré-definida abaixo:
   let matriz = [
        [5, 9, 3, 8, 7, 4, 2, 10, 6, 1],
        [2, 6, 8, 4, 3, 10, 9, 7, 1, 5],
        [7, 9, 4, 3, 8, 2, 6, 1, 5, 10],
        [4, 7, 10, 5, 3, 2, 9, 6, 8, 1],
        [3, 2, 1, 5, 6, 4, 10, 9, 8, 7],
        [6, 8, 2, 9, 3, 7, 10, 1, 4, 5],
        [1, 9, 3, 7, 4, 5, 8, 10, 2, 6],
        [4, 2, 1, 8, 10, 3, 9, 7, 6, 5],
        [8, 5, 9, 4, 10, 7, 2, 1, 3, 6],
        [7, 3, 2, 8, 6, 9, 4, 10, 5, 1]
      ]; */
      
    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i]);
        }
    }
    console.log('====================================');
    console.log('Matriz lida:');
    imprimirMatriz(matriz);
    let somarElementosAcima = elementosAcimaDaDiagonal(matriz);
    console.log('a) soma dos elementos acima da diagonal principal:', somarElementosAcima);

    let somarElementosAbaixo = elementosAbaixoDaDiagonal(matriz);
    console.log('b) soma dos elementos abaixo da diagonal principal:', somarElementosAbaixo);
}
main();