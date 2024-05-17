/*Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de
ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.*/

function combinandoPropriedades(obj1,obj2){
    let novoObjeto = { ...obj1, ...obj2 };
    return novoObjeto;
}
let obj1 = {
    animal: 'Gato',
    cor: 'branco',
    acao: 'arranha',
}
let obj2 = {
    acao: 'pega',
    brinquedo: 'bolinha',
  
}
let novoObjeto = combinandoPropriedades(obj1, obj2);
console.log(novoObjeto);