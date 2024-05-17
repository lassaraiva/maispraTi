// Função para calcular a soma de cada coluna de uma matriz 15x20.

let prompt = require('prompt-sync')();

function somaColuna(matriz) {
    let somaColunas = [];

    for (let j = 0; j < matriz[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < matriz.length; i++) {
            soma += matriz[i][j];
        }
        somaColunas.push(soma);
    }

    return somaColunas;
}

function main() {
    let matriz = [];
    for (let i = 0; i < 15; i++) {
        matriz[i] = [];
        for (let j = 0; j < 20; j++) {
            let valor = parseFloat(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matriz[i][j] = valor;
        }
    }
    /* Se preferir, use a matriz pré-definida abaixo:
    let matriz = [
        [8, 18, 15, 9, 16, 8, 5, 14, 4, 11, 4, 7, 20, 19, 14, 2, 15, 20, 8, 12],
        [3, 19, 5, 11, 3, 17, 4, 15, 18, 15, 4, 11, 20, 12, 5, 7, 13, 17, 6, 14],
        [12, 10, 6, 17, 14, 13, 10, 6, 18, 2, 3, 6, 2, 1, 16, 5, 4, 15, 4, 7],
        [18, 13, 4, 1, 15, 16, 7, 15, 3, 12, 10, 12, 11, 6, 17, 13, 4, 11, 3, 7],
        [14, 15, 13, 5, 6, 7, 16, 11, 17, 7, 8, 7, 10, 2, 17, 1, 11, 18, 16, 19],
        [18, 15, 19, 6, 10, 12, 20, 10, 5, 1, 5, 6, 1, 8, 19, 9, 3, 9, 10, 7],
        [12, 5, 20, 12, 6, 10, 5, 7, 6, 12, 14, 18, 2, 7, 19, 10, 6, 14, 1, 11],
        [5, 16, 11, 14, 6, 17, 10, 7, 3, 13, 5, 12, 15, 9, 1, 7, 6, 9, 18, 14],
        [20, 18, 8, 3, 10, 15, 6, 5, 8, 9, 3, 13, 18, 9, 8, 7, 12, 16, 14, 1],
        [11, 10, 20, 16, 6, 19, 4, 16, 20, 2, 6, 2, 18, 11, 10, 17, 6, 20, 2, 9],
        [3, 7, 8, 11, 5, 20, 4, 9, 16, 15, 10, 8, 17, 8, 5, 20, 7, 18, 19, 15],
        [10, 3, 14, 15, 20, 13, 8, 1, 11, 2, 16, 5, 12, 3, 11, 10, 7, 18, 19, 7],
        [16, 12, 17, 10, 8, 19, 4, 20, 1, 19, 7, 5, 20, 14, 4, 16, 9, 7, 2, 11],
        [19, 12, 8, 16, 13, 18, 17, 19, 9, 14, 17, 6, 5, 6, 11, 17, 10, 11, 12, 1],
        [2, 15, 18, 19, 10, 16, 4, 8, 18, 20, 3, 1, 20, 8, 3, 11, 19, 16, 6, 15]
    ]; */
    
    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i]);
        }
    }    

    imprimirMatriz(matriz);
    let somaDasColunas = somaColuna(matriz);
    console.log('Soma de cada coluna:',somaDasColunas);
}
main();