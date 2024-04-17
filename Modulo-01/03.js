/* Ler 4 numeros inteiros e:
 - Somar 25 ao primeiro inteiro;
 - Triplicar o valor do segundo inteiro;
 - Modificar o valor do terceiro inteiro para 12% do valor original;
 - Armazenar no quarto valor inteiro a soma dos valores iniciais dos tres primeiros.
*/
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Informe o primeiro número inteiro: '));
let n2 = parseInt(prompt('Informe o segundo número inteiro: '));
let n3 = parseInt(prompt('Informe o terceiro número inteiro: '));
let n4 = parseInt(prompt('Informe o quarto número inteiro: '));

let soma1 = n1 + 25;
let triplo2 = n2 * 3;
let porcentagem3 = n3 * 0.12;
let somatodos = n1 + n2 + n3 + n4;

console.log('Números após modificações:');
console.log('Número 1:',soma1);
console.log('Número 2:',triplo2);
console.log('Número 3:',porcentagem3);
console.log('Número 4:',somatodos);