//Calcular o produto de duas matrizes.

function produtoMatriz(matriz1, matriz2) {
    let produto = [];

    for (let i = 0; i < matriz1.length; i++) {
        produto[i] = [];
        for (let j = 0; j < matriz2[0].length; j++) {
            produto[i][j] = 0;
        }
    }

    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz2[0].length; j++) {
            for (let k = 0; k < matriz1[0].length; k++) {
                produto[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    return produto;
}

function main() {
    let matriz1 = [
        [2, 3, 4],
        [1, 2, 3],
        [4, 5, 6],
        [2, 3, 2],
        [2, 3, 4],
    ];
    let matriz2 = [
        [3, 1, 2, 4, 6],
        [2, 4, 6, 1, 4],
        [5, 4, 3, 2, 1],
    ];

    let resultadoProduto = produtoMatriz(matriz1, matriz2);

    console.log('O produto das matrizes é:');
    imprimirMatriz(resultadoProduto);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
    }
}
main();