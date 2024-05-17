//Guardar 10 num inteiros em vetor, mostrar os numeros pares e suas posições.

let prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt('Informe um número: '));
    numeros.push(numero);
}
function mostrarPares(numeros){
    console.log('==================================')
    console.log('Os números pares são: ');
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(`${numeros[i]}, na posiçao ${i} do vetor.`);
        }
    }
}
mostrarPares(numeros);