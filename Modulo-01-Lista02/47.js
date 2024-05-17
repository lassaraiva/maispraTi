/*Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das 
propriedades do objeto, retornando um novo objeto com os resultados.*/

function aplicarFuncao(objeto, funcao) {
    let novoObjeto = {};
    for (let chave in objeto) {
        if (objeto) {
            novoObjeto[chave] = funcao(objeto[chave]);
        }
    }
    return novoObjeto;
}

function gatos() {
    let atributosGato = {
      carisma: 100,
      agilidade: 90,
      fofura: 90,
      traquinagem: 100,
      sono: 80,
    };

    let gatoLaranja = {};  
    gatoLaranja = aplicarFuncao(atributosGato, function(valor) {
        return valor * 2;
    });
  
    console.log('Gato normal:');
    console.log(atributosGato);
  
    console.log('\nGato Laranja:');
    console.log(gatoLaranja);  
    return;
}
gatos();