/*Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

function contarStrings(strings) {
    let cont = {};
    for (let str of strings) {
        cont[str] = (cont[str] || 0) + 1;
    }
    return cont;
}

let vetorStr = ['gato laranja', 'gato branco', 'gato laranja', 'gato frajola', 'gato frajola', 'gato preto'];
let ocorrencias = contarStrings(vetorStr);
console.log(ocorrencias);