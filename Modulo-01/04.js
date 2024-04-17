//Ler duas notas, calcular a média e exibir aprovação (6.0)

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota: "));
let media = (nota1 + nota2)/2;
console.log('Média:',media);

if(media >= 6){
    console.log('PARABÉNS! Você foi aprovado(a)!');
}
