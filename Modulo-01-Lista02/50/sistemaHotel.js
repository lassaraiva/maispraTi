//Navegue até o diretório 50 e execute o arquivo 'index.js' no terminal para acessar o sistema de hotéis.

let hotelAdd = [];
let reservas = [];
let idDaProximaReserva = 1;

function adicionarHotel(nome, cidade, quartosTotais) {
    const hotel = {
        id: hotelAdd.length + 1,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis: quartosTotais,
        reservas: [],
        avaliacoes: []
    };
    hotelAdd.push(hotel);
    return hotel;
}

function buscarHoteisPorCidade(cidade) {
    const cidadeBuscar = cidade.toLowerCase();
    const hoteisEncontrados = hotelAdd.filter(hotel => hotel.cidade.toLowerCase() === cidadeBuscar);
    return hoteisEncontrados;
}

function fazerReserva(idHotel, nomeCliente, quantidadeQuartos) {
    const hotel = hotelAdd.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        return 'Hotel não encontrado no sistema!';
    }

    if (hotel.quartosDisponiveis < quantidadeQuartos) {
        return 'Desculpe, não há quartos suficientes disponíveis neste hotel.';
    }

    const reserva = {
        idReserva: idDaProximaReserva++,
        idHotel,
        nomeCliente,
        quantidadeQuartos
    };

    reservas.push(reserva);
    hotel.reservas.push(reserva);
    hotel.quartosDisponiveis -= quantidadeQuartos;

    return 'Reserva feita com sucesso!\nGuarde o ID da sua reserva: ' + reserva.idReserva;
}

function cancelarReserva(idReserva) {
    const index = reservas.findIndex(reserva => reserva.idReserva === idReserva);
    if (index === -1) {
        return 'Reserva não encontrada!';
    }

    const reserva = reservas[index];
    const hotel = hotelAdd.find(hotel => hotel.id === reserva.idHotel);
    if (!hotel) {
        return 'Hotel não encontrado.';
    }

    hotel.quartosDisponiveis += reserva.quantidadeQuartos;
    hotel.reservas = hotel.reservas.filter(reserva => reserva.idReserva !== idReserva);
    reservas.splice(index, 1);

    return 'Reserva cancelada!';
}

function fazerCheckIn(idReserva) {
    const reserva = reservas.find(reserva => reserva.idReserva === idReserva);
    if (!reserva) {
        return 'Reserva não encontrada!';
    }

    return 'Check-in realizado com sucesso!';
}

function fazerCheckOut(idReserva) {
    const reserva = reservas.find(reserva => reserva.idReserva === idReserva);
    if (!reserva) {
        return 'Reserva não encontrada!';
    }

    const hotel = hotelAdd.find(hotel => hotel.id === reserva.idHotel);
    if (!hotel) {
        return 'Hotel não encontrado!';
    }

    hotel.quartosDisponiveis += reserva.quantidadeQuartos;
    reservas = reservas.filter(reserva => reserva.idReserva !== idReserva);

    return 'Check-out realizado com sucesso! Por favor, avalie sua estadia com uma nota de 1 a 5.';
}

function avaliarHotel(idHotel, avaliacao) {
    const hotel = hotelAdd.find(hotel => hotel.id === idHotel);
    if (!hotel) {
        return 'Hotel não encontrado no sistema!';
    }

    if (avaliacao < 1 || avaliacao > 5) {
        return 'Avaliação deve ser entre 1 e 5!';
    }

    hotel.avaliacoes.push(avaliacao);
    return 'Avaliação cadastrada com sucesso, volte sempre!';
}

function fazerMediaDasAvaliacoes(avaliacoes) {
    const soma = avaliacoes.reduce((total, avaliacao) => total + avaliacao, 0);
    return (soma / avaliacoes.length).toFixed(1);
}

function avaliacaoComEstrelas(media) {
    const estrelasCheias = Math.floor(media);
    const meiaEstrela = media % 1 >= 0.5 ? 1 : 0;
    const estrelasVazias = 5 - estrelasCheias - meiaEstrela;

    return '★'.repeat(estrelasCheias) + (meiaEstrela ? '☆' : '') + '☆'.repeat(estrelasVazias);
}

function taxaDeOcupacaoHoteis(quartosTotais, quartosDisponiveis) {
    const quartosOcupados = quartosTotais - quartosDisponiveis;
    return ((quartosOcupados / quartosTotais) * 100).toFixed(2) + '%';
}

function exibirHoteisCadastrados() {
    return hotelAdd.map(hotel => {
        const media = hotel.avaliacoes.length ? fazerMediaDasAvaliacoes(hotel.avaliacoes) : '0';
        const estrelas = hotel.avaliacoes.length ? avaliacaoComEstrelas(media) : '☆☆☆☆☆';
        const taxaDeOcupacao = taxaDeOcupacaoHoteis(hotel.quartosTotais, hotel.quartosDisponiveis);
        return `Nome: ${hotel.nome}\nCidade: ${hotel.cidade}\nQuartos disponíveis: ${hotel.quartosDisponiveis}\nAvaliações: (${hotel.avaliacoes.length}) ${estrelas}\nTaxa de ocupação: ${taxaDeOcupacao}\n`;
    }).join('\n');
}

function mostarDetalhesDasResevas() {
    return reservas.map(reserva => {
        const hotel = hotelAdd.find(hotel => hotel.id === reserva.idHotel);
        return `ID da reserva: ${reserva.idReserva}\nHotel: ${hotel.nome}\nCidade: ${hotel.cidade}\nCliente: ${reserva.nomeCliente}\nQuartos reservados: ${reserva.quantidadeQuartos}\n`;
    }).join('\n');
}
module.exports = {adicionarHotel, buscarHoteisPorCidade, fazerReserva, cancelarReserva, fazerCheckIn, fazerCheckOut, avaliarHotel, fazerMediaDasAvaliacoes, avaliacaoComEstrelas, exibirHoteisCadastrados, taxaDeOcupacaoHoteis, mostarDetalhesDasResevas};