const {adicionarHotel, buscarHoteisPorCidade, fazerReserva, cancelarReserva, fazerCheckIn, fazerCheckOut, avaliarHotel, fazerMediaDasAvaliacoes, avaliacaoComEstrelas, exibirHoteisCadastrados,taxaDeOcupacaoHoteis,mostarDetalhesDasResevas} = require('./sistemaHotel');

const prompt = require('prompt-sync')();

//Hotéis já no sistema
const hotel1 = adicionarHotel('Hotel Lua Cheia', 'Alto do ceu', 30);
avaliarHotel(hotel1.id, 4); 
avaliarHotel(hotel1.id, 4);
avaliarHotel(hotel1.id, 4);
const hotel2 = adicionarHotel('Hotel Greenie', 'Florestal', 20);
avaliarHotel(hotel2.id, 5); 
avaliarHotel(hotel2.id, 5); 

function mostrarMenu() {
    console.log('====== SISTEMA DE HOTÉIS ======');
    console.log('1. Adicionar hotel');
    console.log('2. Buscar hotéis por cidade');
    console.log('3. Fazer reserva');
    console.log('4. Cancelar reserva');
    console.log('5. Fazer check-In');
    console.log('6. Fazer check-Out');
    console.log('7. Avaliar hotel');
    console.log('8. Listar todos os hotéis');
    console.log('9. Listar todas as reservas');
    console.log('0. Sair');
    console.log('===============================');
}

function menu() {
    mostrarMenu();
    const opcao = prompt('Opção: ');
    switch (opcao) {
        case '1':
            adicionarHotelPrompt();
            break;
        case '2':
            buscarHoteisPorCidadePrompt();
            break;
        case '3':
            fazerReservaPrompt();
            break;
        case '4':
            cancelarReservaPrompt();
            break;
        case '5':
            fazerCheckInPrompt();
            break;
        case '6':
            fazerCheckOutPrompt();
            break;
        case '7':
            avaliarHotelPrompt();
            break;
        case '8':
            exibirHoteisCadastradosPrompt();
            break;
        case '9':
            mostarDetalhesDasResevasPrompt();
            break;
        case '0':
            console.log('Encerrando...Até breve!')
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            menu();
            break;
    }
}

function adicionarHotelPrompt() {
    const nome = prompt('Nome do Hotel: ');
    const cidade = prompt('Cidade: ');
    const quartosTotais = parseInt(prompt('Quantidade de quartos: '));
    const hotel = adicionarHotel(nome, cidade, quartosTotais);
    console.log(`\nHotel adicionado com sucesso! ID do hotel: ${hotel.id}`);
    perguntarVoltarMenu();
}

function buscarHoteisPorCidadePrompt() {
    const cidadeBuscar = prompt('Cidade: ');
    const hoteisEncontrados = buscarHoteisPorCidade(cidadeBuscar);

    if (hoteisEncontrados.length === 0) {
        console.log('Nenhum hotel encontrado nesta cidade.');
    } else {
        console.log('Hotéis encontrados:\n');
        hoteisEncontrados.forEach(hotel => {
            const mediaAvaliacoes = hotel.avaliacoes.length ? fazerMediaDasAvaliacoes(hotel.avaliacoes) : '0';
            const estrelas = hotel.avaliacoes.length ? avaliacaoComEstrelas(mediaAvaliacoes) : '☆☆☆☆☆';
            const taxaDeOcupacao = taxaDeOcupacaoHoteis(hotel.quartosTotais, hotel.quartosDisponiveis);
            console.log(`ID: ${hotel.id}\nNome: ${hotel.nome}\nCidade: ${hotel.cidade}\nQuartos disponíveis: ${hotel.quartosDisponiveis}\nAvaliações: (${hotel.avaliacoes.length})${estrelas}\nTaxa de ocupação: ${taxaDeOcupacao}\n`);
        });
    }
    perguntarVoltarMenu();
}

function fazerReservaPrompt() {
    const idHotelReserva = parseInt(prompt('ID do hotel: '));
    const nomeCliente = prompt('Nome do cliente: ');
    const quantidadeQuartos = parseInt(prompt('Quantidade de quartos: '));
    const resultadoReserva = fazerReserva(idHotelReserva, nomeCliente, quantidadeQuartos);
    console.log(`\n${resultadoReserva}`);
    perguntarVoltarMenu();
}

function cancelarReservaPrompt() {
    const idReservaCancelar = parseInt(prompt('ID da reserva: '));
    const resultadoCancelar = cancelarReserva(idReservaCancelar);
    console.log(`${resultadoCancelar}`);
    perguntarVoltarMenu();
}

function fazerCheckInPrompt() {
    const idReservaCheckIn = parseInt(prompt('ID da reserva: '));
    const resultadoCheckIn = fazerCheckIn(idReservaCheckIn);
    console.log(`${resultadoCheckIn}`);
    perguntarVoltarMenu();
}

function fazerCheckOutPrompt() {
    const idReservaCheckOut = parseInt(prompt('ID da reserva: '));
    const resultadoCheckOut = fazerCheckOut(idReservaCheckOut);
    console.log(`${resultadoCheckOut}`);
    const avaliar = prompt('Deseja avaliar sua estadia? (S/N): ');
    if (avaliar.toLowerCase() === 's') {
        avaliarHotelPrompt();
    } else {
        perguntarVoltarMenu();
    }
}

function avaliarHotelPrompt() {
    const idHotelAvaliar = parseInt(prompt('ID do hotel: '));
    const avaliacao = parseInt(prompt('Avaliação (1 a 5): '));
    const resultadoAvaliar = avaliarHotel(idHotelAvaliar, avaliacao);
    console.log(`\n${resultadoAvaliar}`);
    perguntarVoltarMenu();
}

function exibirHoteisCadastradosPrompt() {
    console.log('Hotéis cadastrados:\n');
    console.log(exibirHoteisCadastrados());
    console.log('=======================================================================================');
    perguntarVoltarMenu();
}

function mostarDetalhesDasResevasPrompt() {
    console.log('Reservas cadastradas:\n');
    console.log(mostarDetalhesDasResevas());
    console.log('=======================================================================================');
    perguntarVoltarMenu();
}

function perguntarVoltarMenu() {
    const voltarMenu = prompt('Deseja voltar ao menu? (S/N): ');
    if (voltarMenu.toLowerCase() === 's') {
        menu();
    } else {
        console.log('Encerrando... Até breve!');
    }
}
menu();