//Calcular valor do aluguel com as especificações de cada carro.

let prompt = require('prompt-sync')();

function valorAluguel(tipoDeCarro,diasAlugados,kmViagem){
    let valorFixo;
    let valorViagem;

    switch(tipoDeCarro){
        case 'popular':
            valorFixo = 90 * diasAlugados;
            if (kmViagem <= 100) {
                valorViagem = kmViagem * 0.2;
            }
            else{
                valorViagem = kmViagem * 0.1;
            }
            break;

        case 'luxo':
            valorFixo = 150 * diasAlugados;
            if (kmViagem <= 200) {
                valorViagem = kmViagem * 0.3;
            }
            else{
                valorViagem = kmViagem * 0.25;
            }
            break;

    }
    let valorFinal = valorFixo + valorViagem;
    return valorFinal;
}

let tipoDeCarro = prompt('Informe o tipo de carro foi alugado (Popular ou Luxo): ').toLowerCase();
let diasAlugados = parseInt(prompt('Informe por quantos dias o carro foi alugado: '));
let kmViagem = parseInt(prompt('Informe quantos Km foram percorridos: '));

let valorTotal = valorAluguel(tipoDeCarro,diasAlugados,kmViagem);
console.log('O valor total do aluguel é R$ ' + valorTotal.toFixed(2) + '!');
