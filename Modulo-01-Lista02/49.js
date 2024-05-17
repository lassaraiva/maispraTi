/*Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor,
data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores
são arrays de transações pertencentes a essa categoria. Inclua um subtotal de valores por categoria. */

function organizarTransacoes(transacoes) {
    let categorias = {};

    for (let transacao of transacoes) {
        let categoria = transacao.categoria;

        if (!categorias[categoria]) {
            categorias[categoria] = {transacoes: [], subtotal: 0};
        }

        categorias[categoria].transacoes.push(transacao);
        categorias[categoria].subtotal += transacao.valor;
    }

    return categorias;
}

let transacoes = [
    {id: 1, valor: 250, data: '03/04/24', categoria: 'Racao'},
    {id: 2, valor: 75, data: '03/04/24', categoria: 'Brinquedo'},
    {id: 3, valor: 180, data: '13/05/24', categoria: 'Racao'},
    {id: 4, valor: 100, data: '13/05/24', categoria: 'Brinquedo'},
];


let categorias = organizarTransacoes(transacoes);
console.log(JSON.stringify(categorias, null, 2));
