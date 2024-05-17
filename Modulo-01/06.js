// Verificar se 3 valores podem formar um triângulo. Se sim, isósceles, escaleno ou equilátero.

let prompt = require('prompt-sync')();

let A = parseFloat(prompt('Informe o primeiro valor: '));
let B = parseFloat(prompt('Informe o segundo valor: '));
let C = parseFloat(prompt('Informe o terceiro valor: '));

if(A < B + C && B < A + C && C < A + B){
    if(A == B && B == C){
    console.log('Os valores informados podem formar um triângulo equilátero.');
    }else if(A == B || A == C || B == C){
    console.log('Os valores informados podem formar um triângulo isósceles');
    }else{
    console.log('Os valores informados podem formar um triângulo escaleno');
}
}else{
    console.log('Os valores informados não podem formar um triângulo.');
}
