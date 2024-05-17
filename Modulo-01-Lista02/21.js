//Receber altura e sexo. Retornar o peso ideal conforme o sexo.

let prompt = require('prompt-sync')();

function calcularPesoIdeal(sexo,alt){
    let pesoIdeal;

    switch(sexo){
        case 'F':
            pesoIdeal = 62.1 * alt - 44.7;
            break;

        case 'M':
            pesoIdeal = 72.1 * alt - 58;
            break;

    }
    return pesoIdeal;
}
let alt = parseFloat(prompt('Informe sua altura em metros (ex: 1.70): '));
let sexo = prompt('Informe seu sexo (F/M): ').toUpperCase();

let peso = calcularPesoIdeal(sexo,alt);
console.log('Seu peso ideal é: ' + peso.toFixed(2) + 'Kg!');