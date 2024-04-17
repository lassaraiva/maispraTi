//Regiao do produto através do codigo.

const prompt = require('prompt-sync')();

let codigoProduto = parseInt(prompt('Informe o código do produto: '));
let regiao;

switch(codigoProduto){
    case 1:
        regiao = 'O código fornecido pertence a um produto da região Sul.';
        break;
    case 2:
        regiao = 'O código fornecido pertence a um produto da região Norte.';
        break;
    case 3:
        regiao = 'O código fornecido pertence a um produto da região Leste.';
        break;
    case 4:
        regiao = 'O código fornecido pertence a um produto da região Oeste.';
        break;
    case 5:
    case 6:
        regiao = 'O código fornecido pertence a um produto da região Nordeste.';
        break;
    case 7:
    case 8:
    case 9:
        regiao = 'O código fornecido pertence a um produto da região Sudeste.';
        break;
    default:
        if(codigoProduto >= 10 && codigoProduto <= 20){
            regiao = 'O código fornecido pertence a um produto da região Centro-Oeste.';
        }else if(codigoProduto >= 25 && codigoProduto <=50){
            regiao = 'O código fornecido pertence a um produto da região Noroeste.';
        }else{
            regiao = 'Produto Importado!';
        }
}
console.log(regiao);