/*Ler um vetor de 20 caracteres, que é o gabarito de uma prova. Ler o gabarito de cada um dos 50 alunos.
Verificar a quantidade de acertos e se a quantidade de acertos for maior ou igual a 12, mostre "APROVADO",
caso contrário, "REPROVADO"! */

function gerarGabarito() {
    let letras = ['V', 'F'];
    let gabarito = [];
    for (let i = 0; i < 20; i++) {
        let letra = letras[Math.floor(Math.random() * letras.length)];
        gabarito.push(letra);
    }
    return gabarito;
}

function verificarAcertos(participante, gabarito) {
    let acertos = 0;
    for (let i = 0; i < participante.numerosAleatorios.length; i++) {
        if (participante.numerosAleatorios[i] === gabarito[i]) {
            acertos++;
        }
    }
    return acertos;
}

function exibirResultados(resultados) {
    console.log('Resultados:');
    for (let i = 0; i < resultados.length; i++) {
        let aluno = resultados[i].aluno;
        let acertos = resultados[i].acertos;
        let numerosAleatorios = resultados[i].numerosAleatorios.join(", ");
        console.log(`Aluno ${aluno}, [${numerosAleatorios}] acertou ${acertos} números.`);
        if (acertos >= 12) {
            console.log(`\n${aluno}, APROVADO!\n`);
        }else if(acertos < 12) {
            console.log(`\n${aluno}, REPROVADO!\n`);
        }
    }
}

function dadosDasRespostas() {
    let gabaritoOficial = gerarGabarito();
    console.log('Gabarito:', gabaritoOficial);

    let resultados = [];
    for (let i = 1; i <= 50; i++) {
        let aluno = i;
        let numerosAleatorios = gerarGabarito();
        let acertos = verificarAcertos({ numerosAleatorios }, gabaritoOficial);
        resultados.push({ aluno, numerosAleatorios, acertos });
    }

    exibirResultados(resultados);
}
dadosDasRespostas();