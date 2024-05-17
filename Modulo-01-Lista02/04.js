//Verificar se 3 segmentos de reta podem formar um triângulo.

let prompt = require('prompt-sync')();

console.log('**Informe o tamannho de três segmentos de reta**');
let A = parseFloat(prompt('Primeiro segmento: '));
let B = parseFloat(prompt('Segundo segmento: '));
let C = parseFloat(prompt('Terceiro segmento: '));

if(A < B + C && B < A + C && C < A + B){
    console.log('É possível formar um triândulo com os segmentos informados!');
}else{
    console.log('Não é possível formar um triândulo com os segmentos informados!');
}
