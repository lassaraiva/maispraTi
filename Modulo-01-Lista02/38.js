/*Ler um vetor[6] e, após sua leitura, ler outra variável identificadora que calcule a operação conforme
a informação contina nessa variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordenar os elementos em ordem crescente;
5- mostrar o vetor. */

let prompt = require('prompt-sync')();

function somarVetor(vetor) {
    let soma = 0;
    for (let elemento of vetor) {
        soma += elemento;
    }
    return soma;
}

function produtoVetor(vetor) {
    let produto = 1;
    for (let elemento of vetor) {
        produto *= elemento;
    }
    return produto;
}

function mediaVetor(vetor) {
    let soma = somarVetor(vetor);
    return soma / vetor.length;
}

function ordenarVetor(vetor) {
    return vetor.slice().sort((a, b) => a - b);
}

function mostrarVetor(vetor) {
    console.log('Vetor:', vetor);
}

function menu() {
    console.log('\n********* M E N U **********');
    console.log('1. Soma dos elementos');
    console.log('2. Produto dos elementos');
    console.log('3. Média dos elementos');
    console.log('4. Ordenar os elementos em ordem crescente');
    console.log('5. Mostrar o vetor');
    console.log('0. Encerrar');
}

function main() {
    let vetor = [];
        for (let i = 0; i < 6; i++) {
            let elemento = parseFloat(prompt(`Informe o ${i+1}º elemento do vetor: `));
            vetor.push(elemento);
        }
     /* Se preferir, use o vetor pré-definido abaixo:
    let vetor = [2, 4, 1, -3, 6, 5]; */

    let operacao = -1;
    while (operacao !== 0) {
        menu();
        operacao = parseInt(prompt('Opção: '));

        switch (operacao) {
            case 1:
                console.log('========================');
                console.log('Soma dos elementos:', somarVetor(vetor));
                break;
            case 2:
                console.log('========================');
                console.log('Produto dos elementos:', produtoVetor(vetor));
                break;
            case 3:
                console.log('========================');
                console.log('Média dos elementos:', mediaVetor(vetor));
                break;
            case 4:
                console.log('==========================================================');
                console.log('Vetor ordenado em ordem crescente:', ordenarVetor(vetor));
                break;
            case 5:
                console.log('=============================');
                mostrarVetor(vetor);
                break;
            case 0:
                console.log('========================');
                console.log('Encerrando...');
                break;
            default:
                console.log('========================');
                console.log('Opção inválida!');
        }
    }
}

main();
