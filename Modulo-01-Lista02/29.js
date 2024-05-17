//algoritmo que leia uma matriz M(5,5) e calcule as somas:
//a) da linha 4 de M;
//b) da coluna 2 de M;
//c) da diagonal principal;
//d) todos os elementos da matriz M.


let prompt = require('prompt-sync')();

function somaLinha(matrizM, linha){
    let somaLinha4 = 0;

    for (let j = 0; j < matrizM[linha].length; j++) {
            somaLinha4 += matrizM[linha][j];
        }
    
        return somaLinha4;
    }

function somaColuna(matrizM, coluna){
    let somaColuna2 = 0;
    
    for (let i = 0; i < matrizM[coluna].length; i++) {
            somaColuna2 += matrizM[i][coluna];
        }
        
        return somaColuna2;
    }
    
function somaDiagonalPrincipal(matrizM) {
    let somarDiagonalP = 0;

    for (let i = 0; i < matrizM.length; i++) {
        for (let j = 0; j < matrizM[i].length; j++) {
            if (i === j) {
         somarDiagonalP += matrizM[i][j];
            }
        }
    }

    return somarDiagonalP;
}

function somaMatrizToda(matrizM) {
    let somaTotal = 0;

    for (let i = 0; i < matrizM.length; i++) {
        for (let j = 0; j < matrizM[i].length; j++) {
            somaTotal += matrizM[i][j];
        }
    }

    return somaTotal;
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
      ];*/ 
      
    function imprimirMatriz(matrizM) {
        for (let i = 0; i < matrizM.length; i++) {
            console.log(matrizM[i]);
        }
    }
    console.log('====================================');
    console.log('Matriz lida:');
    imprimirMatriz(matrizM);
    let somaLinha4 = somaLinha(matrizM, 3);
    console.log('a) soma dos elementos da linha 4:', somaLinha4);

    let somaColuna2 = somaColuna(matrizM, 1);
    console.log('b) soma dos elementos da coluna 2:', somaColuna2);

    let somarDiagonalP = somaDiagonalPrincipal(matrizM);
    console.log('c) soma dos elementos da diagonal principal:',somarDiagonalP);

    let somaTotal = somaMatrizToda(matrizM);
    console.log('d) soma de todos os elementos da matriz:', somaTotal);
}
main();