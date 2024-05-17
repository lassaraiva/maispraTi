/*Criar um objeto chamado dados que contenha propriedades, incluindo números, strings e arrays. Escreva
uma função que retorne um novo objeto apenas com as propriedades que são arrays. */

let dados = {
    nome: 'Ada Lovelace',
    idade: '21',
    atributos: ['Matemática', 'Poetisa', 'Programadora'],
}
function filtrarArrays(objeto) {
    let arrays = {};
    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            arrays[chave] = objeto[chave];
        }
    }
    return arrays;
}
console.log(filtrarArrays(dados));