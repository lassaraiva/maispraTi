//Escreva uma função que conte quantas propriedades do tipo string existem em um objeto.

let dados = {
    nome: 'Ada Lovelace',
    idade: '21',
    atributos: ['Matemática', 'Poetisa', 'Programadora'],
}
function filtrarStrings(objeto) {
    let cont = 0;
    for (let chave in objeto) {
        if (typeof objeto[chave] === 'string') {
            cont++;
        }
    }
    return cont;
}
console.log(filtrarStrings(dados));