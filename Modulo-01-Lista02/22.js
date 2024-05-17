/*Uma prefeitura fez uma pesquisa entre seus habitantes, coletando dados de salário e número de filhos .
Faça uma função que leia um número indeterminado de dados e retorne: a média da população e do número de
filhos, além do maior salário e o percentual de pessoas com salário até R$350,00.*/

let prompt = require('prompt-sync')();

function dadosPrefeitura() {
    let totalDosSalarios = 0;
    let totalDeFilhos = 0;
    let totalDePessoas = 0;
    let maiorSalario = 0;
    let salarioAte350 = 0; 

    while(true) {
        let salario = parseFloat(prompt('Informe o salário: '));
        totalDosSalarios += salario;

        let filhos = parseInt(prompt('Informe o número de filhos: '));
        totalDeFilhos += filhos;

        maiorSalario = Math.max(maiorSalario, salario);

        if (salario <= 350) {
            salarioAte350++;
        }

        totalDePessoas++;

        let encerrar = prompt('Deseja continuar adicionando dados? (S/N): ').toUpperCase();
        if (encerrar === 'N') {
            break;
        }
    }

    let mediaSalario = totalDosSalarios / totalDePessoas;
    let mediaFilhos = totalDeFilhos / totalDePessoas;
    let percentualSalarioAte350 = (salarioAte350 / totalDePessoas) * 100;

    console.log('==========================================================');
    console.log(`Salário médio: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média do número de filhos: ${mediaFilhos.toFixed(0)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioAte350.toFixed(2)}%`);
}
dadosPrefeitura();