//multiplicar os elementos da diagonal principal com a média dos elementos da diagonal secundária.

let prompt = require('prompt-sync')();

function diagonalPrincipal(matriz) {
    let diagonalP = [];
    
    for (let i = 0; i < matriz.length; i++) {
        diagonalP.push(matriz[i][i]);
    }
    return diagonalP;
}

function diagonalSecundaria(matriz){
    let diagonalS = [];

    for (let i = 0, j = matriz.length - 1; i < matriz.length; i++, j--){
        diagonalS.push(matriz[i][j]);
    }
    return diagonalS;
}

function mediaDiagonalSecundaria(diagonalS) {
    let soma = 0;

    for (let i = 0; i < diagonalS.length; i++) {
        soma += diagonalS[i];
    }
    let media = soma / diagonalS.length;
    return media;
}

function multiplicarDiagonalPrincipal(diagonalP, media) {
    let diagonalPMultiplicada = [];

    for (let i = 0; i < diagonalP.length; i++) {
        diagonalPMultiplicada.push(diagonalP[i] * media);
    }
    return diagonalPMultiplicada;
}

function main() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            let valor = parseFloat(prompt(`Informe o valor da posição ${i+1}x${j+1}: `));
            matriz[i][j] = valor;
        }
    }

    /* Se preferir, use a matriz pré-definida abaixo:
    let matriz = [  
        [3, 6, 2],
        [1, 6, 3],
        [4, 5, 2]
    ];*/

    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i]);
        }
    }
    console.log('====================================');
    console.log('Matriz lida:');
    imprimirMatriz(matriz);

    let diagonalP = diagonalPrincipal(matriz);
    console.log('\nDiagonal Principal:', diagonalP);
    let diagonalS = diagonalSecundaria(matriz);
    console.log('Diagonal Secundária:', diagonalS);
    let mediaDiagonalS = mediaDiagonalSecundaria(diagonalS);
    console.log('Média da diagonal secundária:', mediaDiagonalS);
    let resultado = multiplicarDiagonalPrincipal(diagonalP, mediaDiagonalS);
    console.log(`Diagonal Princiapal multiplicada por ${mediaDiagonalS}:`,resultado); 
}
main();