//Imprimir os 50 primeiros numeros primos maiores que 100.

let valor = 100;
let cont = 0;

while (cont < 50) {
    let ehPrimo = true;
    let numDivisores = 2;

    while (numDivisores <= valor / 2) {
        while (valor % numDivisores == 0) {
            ehPrimo = false;
            break;
        }
        numDivisores++;
    }
    while (ehPrimo) {
        console.log(valor);
        cont++;
        break;
    }

    valor++;
}