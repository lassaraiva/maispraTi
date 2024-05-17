//Receber valores inteiros e verificar se são pares ou ímpares.

let prompt = require('prompt-sync')();

while(true){
    let valor = parseInt(prompt('Informe um número inteiro positivo: '));

    if(valor <= 0){
        console.log('Encerrando...');
        break;
    }
    if(valor % 2 == 0 && valor > 0){
        console.log (valor, 'é par');
        console.log('=== Informe 0 ou valor negativo para encerrar ===')
    }else{
        console.log (valor, 'é ímpar');
        console.log('=== Informe 0 ou valor negativo para encerrar ===')
    } 
    
}
