//Cobrança de R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

let prompt = require('prompt-sync')();

function calcularPassagem(kmViagem) {
    let valorViagem;
    if (kmViagem <= 200) {
        valorViagem = kmViagem * 0.5;
    } else {
        valorViagem = kmViagem * 0.45;
    }
    return valorViagem.toFixed(2);
}
let kmViagem = parseInt(prompt('Informe a distância (Km) que deseja percorrer: '));
let valorFinal = calcularPassagem(kmViagem);

console.log('O preço da passagem é R$ ' + valorFinal + '!');