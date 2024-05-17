//Receber numeros decimais e fazer a media aritmetica.

let prompt = require('prompt-sync')();

let soma = 0;
let cont = 0;
let valor;

while((valor = parseFloat(prompt('Informe um número decimal: '))) !== 0){
    console.log('=== Informe 0 para encerrar ===');
    
        soma += valor;
        cont++;
    } 
        let media = soma/cont;
        console.log('Encerrando...');
        console.log('Média dos números inseridos: ',media);
    
