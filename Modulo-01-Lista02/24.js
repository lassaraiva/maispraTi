/*Dada uma matriz M[6,8], criar um vetor C que contenha, em cada posição, a quantidade de elementos
negativos da linha correspondente de M. */

function negativosLinhas(matriz) {
    let vetorC = [];

    for (let i = 0; i < matriz.length; i++) {
        let cont = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                cont++;
            }
        }
        vetorC.push(cont);
    }

    return vetorC;
}
let matrizM = [
    [0, -1, -2, -3],
    [-4, 5, -6, 7],
    [-8, 9, 10, 11],
    [12, 13, 14, 15]
];
let vetorC = negativosLinhas(matrizM);
console.log('Vetor C:', vetorC);