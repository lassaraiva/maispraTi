//Criar e imprimir uma matriz identidade.

function matrizIdentidade(n) {
    let identidade = [];
    
    for (let i = 0; i < n; i++) {
        identidade[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                identidade[i][j] = 1;
            } else {
                identidade[i][j] = 0;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        console.log(identidade[i]);
    }
}
matrizIdentidade(4);