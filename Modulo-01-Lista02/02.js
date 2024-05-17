//Multa de R$5,00/km acima de 80km/h.

let prompt = require('prompt-sync')();

let velocidade = parseInt(prompt('Informe a velocidade(Km/h) do carro: '));

if (velocidade > 80){
    let multa = (velocidade-80) * 5;
    console.log('Você foi multado! O valor da multa é de R$ ' +multa.toFixed(2)+'!');
}else{
    console.log('Você não foi multado!');
}