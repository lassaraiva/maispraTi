//Tabuada

let prompt = require('prompt-sync')();

for(let i = 0; i < 5; i ++){
    let valor = parseInt(prompt('Informe um número: '));
    for(let j = 1; j <= valor; j++){
        console.log(`${j} x ${valor} = ${j * valor}`);
    }
}