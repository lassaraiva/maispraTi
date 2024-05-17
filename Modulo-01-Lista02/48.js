/*Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e 
inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função 
que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.*/

let inventarioLojaA = {
    bola: 10,
    chuteira: 30,
    uniforme: 30,
}
let inventarioLojaB = {
    bola: 20,
    apito: 10,
    confete: 25,
}
function combinarInventarios(inventarioLojaA,inventarioLojaB){
    let inventariosCombinados = { ...inventarioLojaA };

    for (let item in inventarioLojaB) {
      if (inventariosCombinados[item]) {
        inventariosCombinados[item] += inventarioLojaB[item];
      } else {
        inventariosCombinados[item] = inventarioLojaB[item];
      }
    }
    return inventariosCombinados;
  }

 let inventariosCombinados = combinarInventarios(inventarioLojaA,inventarioLojaB);
console.log('Total de ítens no inventário:',inventariosCombinados);