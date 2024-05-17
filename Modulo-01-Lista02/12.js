//10 primeiros elementos da sequência de Fibonacci.

let atual = 1;
let anterior = 0;

for (let i = 0; i < 10; i++) {
    console.log(atual);
    let proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
}
