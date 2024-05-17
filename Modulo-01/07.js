//Menos de uma duzia de maçãs custa R$ 0,30. A partir de uma dúzia R$ 0,25.

let prompt = require('prompt-sync')();

let totalMacas = parseInt(prompt('Informe a quantidade de maçãs comprada: '));

if(totalMacas >= 12){
    let valorDesconto = totalMacas * 0.25;
    console.log('Valor da compra: R$',valorDesconto);
}else{
    let valorNormal = totalMacas * 0.30;
    console.log('Valor da compra: R$',valorNormal);
}