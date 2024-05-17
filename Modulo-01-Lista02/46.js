/*Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. 
Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */

function totalVendasPorVendedor(vendas) {
    let somaVenda = {};

    for (let venda of vendas) {
        let { vendedor, valor } = venda;
        if (!somaVenda[vendedor]) {
            somaVenda[vendedor] = 0;
        }
        somaVenda[vendedor] += valor;
    }

    return somaVenda;
}

let vendas = [
    { vendedor: 'Maria', valor: 450 },
    { vendedor: 'Marcos', valor: 1500 },
    { vendedor: 'Joana', valor: 1200 },
    { vendedor: 'Antonio', valor: 380 },
    { vendedor: 'Maria', valor: 1000 },
    { vendedor: 'Antonio', valor: 590 },
];

let totalVendas = totalVendasPorVendedor(vendas);
console.log(totalVendas);
