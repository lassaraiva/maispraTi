//15 primeiros elementos da sequência de Fibonacci preenchidos em vetor pelo algoritmo.

let fibonacci = [];
let atual = 1;
let anterior = 0;

for (let i = 0; i < 15; i++) {
    fibonacci.push(atual);
    let proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
}

console.log('Os 15 primeiros números da sequência de Fibonacci são: ');
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}