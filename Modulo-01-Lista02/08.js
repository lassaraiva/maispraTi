//Calcular ganhos através de pontos recebidos por horas de atividades físicas.

let prompt = require('prompt-sync')();

function calcularPontos(horas) {
    let pontos;
    if (horas <= 10) {
        pontos = horas * 2;
    } else if (horas > 10 && horas <= 20){
        pontos = horas * 5;
    } else {
        pontos = horas * 10
    }
    return pontos.toFixed(0);
}

let horas = parseInt(prompt('Informe sua quantidade de horas de atividade física do mês: '));
let pontosGanhos = calcularPontos(horas);
let valorGanho = calcularPontos(horas) * 0.05.toFixed(2);

console.log('Você conseguiu '+ pontosGanhos + ' pontos e ganhou R$ '+valorGanho+ '!');