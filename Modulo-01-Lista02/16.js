/* Crie uma lógica que preencha um vetor[20] com números aleatórios [0-99] gerados pelo computador.
Mostre os números gerados e coloque o vetor em ordem crescente. */

let numeros = [];

function gerarNumero() {
    return Math.round(Math.random() * 98) + 99;
}

function gerarVetor() {
    for (let i = 0; i < 20; i++) {
        let numero = gerarNumero(); 
        numeros.push(numero);
    }
}

function ordemCrescente(numeros) {
    numeros.sort((a, b) => a - b);
}

gerarVetor();
console.log('Vetor gerado:',numeros); 
ordemCrescente(numeros);
console.log('Vetor gerado em ordem crescente:', numeros);