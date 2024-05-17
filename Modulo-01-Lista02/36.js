/*Ler um vetor de 13 elementos inteiros, que é o resultado de um teste da loteria esportiva. Ler, para
cada um dos 100 participantes, o número de seu cartão e um vetor Respostas de 13 posições. Verificar a
quantidade de acertos de cada apostador. Escrever o número do apostador e seu total de acertos. Se o apos-
tador tiver 13 acertos, mostre "Parabéns, tu foi o GANHADOR!" */

function gerarGabarito() {
    let gabarito = new Set();
    while (gabarito.size < 13) {
        let numero = Math.round(Math.random() * 14) + 1;
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
        if (acertos === 13) {
            console.log(`\nParabéns ${apostador}, tu foi o GANHADOR!\n`);
        }
    }
}

function dadosDasApostas() {
    let gabaritoOficial = gerarGabarito();
    console.log('Gabarito:', gabaritoOficial);

    let resultados = [];
    for (let i = 1; i <= 100; i++) {
        let apostador = i;
        let numerosAleatorios = gerarGabarito();
        let acertos = verificarAcertos({ numerosAleatorios }, gabaritoOficial);
        resultados.push({ apostador, numerosAleatorios, acertos });
    }

    exibirResultados(resultados);
}
dadosDasApostas();