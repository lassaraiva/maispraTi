/* Criar um registro com o nome, cargo e salário do funcionário. Ler o registro para o funcionário e
ao final, escrever o conteúdo do registro. */

let prompt = require('prompt-sync')();

function colherDados() {
    let nome = prompt('Informe o nome do funcionário: ');
    let cargo = prompt('Informe o cargo do funcionário: ');
    let salario = parseFloat(prompt('Informe o salário do funcionário: '));
    return {nome, cargo, salario};
}

function exibirDados(funcionario) {
    console.log('Nome:', funcionario.nome);
    console.log('Cargo:', funcionario.cargo);
    console.log('Salário:', funcionario.salario);
}

function main() {
    console.log('=====Registrar Funcionário=====');
    let funcionario = colherDados();
    console.log('=====================================');
    console.log('Dados do Funcionário cadastrado: ');
    exibirDados(funcionario);
}
main();