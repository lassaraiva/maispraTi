//Receber numeros decimais, seus pesos e fazer a media ponderada.

let prompt = require('prompt-sync')();

let soma = 0;
let somaPonderada = 0;
let valor;

while((valor = parseFloat(prompt('Informe um número decimal: '))) !== 0){
   
    let peso = parseFloat(prompt('Informe o peso do número: '));
    console.log('=== Informe 0 para encerrar ===');

        soma += peso;
        somaPonderada += valor * peso;
}
        let mediaPonderada = somaPonderada/soma;
        console.log('Encerrando...');
        console.log ('Média dos números inseridos: ',mediaPonderada);