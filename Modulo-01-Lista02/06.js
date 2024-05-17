//Advinhar número entre 1 e 5.

let prompt = require('prompt-sync')();

function gerarNumero() {
    return Math.round(Math.random() * 4) + 1;
}

function advinhaNumero() {
    let numeroGerado = gerarNumero();
    let palpite = parseInt(prompt('Advinhe o número sorteado (1-5): '));

    if (palpite === numeroGerado) {
        console.log('🎉Parabéns! Você acertou!🎉\nNúmero sorteado: '+numeroGerado);

    } else {
        console.log('Poxa, que pena!😔\nNúmero sorteado: '+numeroGerado);
    }
}
advinhaNumero();
