//Pedra-Papel-Tesoura

let prompt = require('prompt-sync')();

function gerarEscolha() {
    return Math.round(Math.random() * 2) + 1;
}

function joKenPo() {
    let escolhaDoPC = gerarEscolha();
    let emoji;
    if (escolhaDoPC === 1) {
        emoji = "👊";
    } else if (escolhaDoPC === 2) {
        emoji = "✋";
    } else {
        emoji = "✌️";
    }
    console.log('==========JoKenPo=========');
    console.log('1. Pedra 👊');
    console.log('2. Papel ✋');
    console.log('3. Tesoura ✌️');
    console.log('======Faça sua escolha=====');
    let palpite = parseInt(prompt('-> '));

    if (palpite === escolhaDoPC) {

        console.log('Empate!😀');
        console.log('O computador escolheu: ' +emoji);

    } else if ((palpite === 1 && escolhaDoPC === 3) || (palpite === 2 && escolhaDoPC === 1)|| (palpite === 3 && escolhaDoPC === 2)){
        console.log('Você venceu!🎉');
        console.log('O computador escolheu: ' +emoji);
    } else{
        console.log('Você perdeu!😔');
        console.log('O computador esolheu: '+emoji);
    }
}
joKenPo();