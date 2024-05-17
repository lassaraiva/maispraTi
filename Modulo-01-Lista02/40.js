/*Ler um vetor de 5 elementos inteiros, que é o resultado oficial da Loto. Ler as apostas de cada um dos
50 apostadores. Verificar a quantidade de acertos de cada apostador. Se o apostador tiver 5 acertos,
mostre "Ganhador!" */

function gerarGabarito() {
    let gabarito = new Set();
    while (gabarito.size < 5) {
        let numero = Math.round(Math.random() * 24) + 1;
        gabarito.add(numero);
    }
    return Array.from(gabarito);
}

function verificarAcertos(participante, gabarito) {
    let acertos = 0;
    for (let i = 0; i < participante.numerosAleatorios.length; i++) {
        if (gabarito.includes(participante.numerosAleatorios[i])) {
            acertos++;
        }
    }
    return acertos;
}

function exibirResultados(resultados) {
    console.log('Resultados:');
    for (let i = 0; i < resultados.length; i++) {
        let apostador = resultados[i].apostador;
        let acertos = resultados[i].acertos;
        let numerosAleatorios = resultados[i].numerosAleatorios.join(", ");
        console.log(`Cartão ${apostador}, [${numerosAleatorios}] acertou ${acertos} números.`);
        if (acertos === 5) {
            console.log(`\nGanhador${apostador}!\n`);
        }
    }
}

function dadosDasApostas() {
    let gabaritoOficial = gerarGabarito();
    console.log('Resultado da Loto:', gabaritoOficial);

    let resultados = [];
    for (let i = 1; i <= 50; i++) {
        let apostador = i;
        let numerosAleatorios = gerarGabarito();
        let acertos = verificarAcertos({ numerosAleatorios }, gabaritoOficial);
        resultados.push({ apostador, numerosAleatorios, acertos });
    }

    exibirResultados(resultados);
}
dadosDasApostas();