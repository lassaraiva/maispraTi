//Ler os salários dos funcionários e calcular a soma total dos salários de mulheres e homens.

let prompt = require('prompt-sync')();

let sexoF = 0;
let sexoM = 0;

while(true){
let salario = parseFloat(prompt('Informe o salário do funcionáro: '));
let sexoMF = prompt('Informe o sexo do funcioário (F/M): ').toUpperCase();
if (sexoMF === 'F'){
   sexoF += salario;
} else if (sexoMF === 'M'){
    sexoM +=salario;
}
let encerrar = prompt('Deseja continuar adicionando dados? (S/N): ').toUpperCase();
if (encerrar === 'N'){
    break;
}
}
console.log('==========================================================')
console.log('Total de salário pago aos homens: R$ '+sexoM.toFixed(2)+ '.');
console.log('Total de salário pago às mulheres: R$ '+sexoF.toFixed(2)+ '.');