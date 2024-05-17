// Ler 5 horários e validá-los através de repetição. Escrever no formato HH.MM.SS.

let prompt = require('prompt-sync')();

function validarCadaHorario(horario) {
    let padrao = /^([01]\d|2[0-3]).([0-5]\d).([0-5]\d)$/;
    return padrao.test(horario);
}

function lerHorario() {
    let horario;
    let valido = false;
    while (!valido) {
        horario = prompt('Informe um horário no formato (Horas.Minutos.Segundos): ');
        if (validarCadaHorario(horario)) {
            valido = true;
        } else {
            console.log('ATENÇAO! O horário deve estar no formato HH.MM.SS, tente novamete: ');
        }
    }
    return horario;
}

function main() {
    let horarios = [];

    for (let i = 1; i <= 5; i++) {
        let horario = lerHorario();
        horarios.push(horario);
    }
    console.log('=====================================');
    console.log('Horários informados (HH.MM.SS):');
    for (let horario of horarios) {
        let [hora, minuto, segundo] = horario.split(".");
        console.log(`${hora.padStart(2, '0')}.${minuto.padStart(2, '0')}.${segundo.padStart(2, '0')}`);
    }
}
main();
