/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma 
tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia 
e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é:
Matrícula:
Nome:
Salário bruto:
Dedução INSS: (desconto de 12%, salário líquido é a diferença entre salário bruto)
Salário líquido: */

function folhaDePagamentos() {
    let dados = [];
    funcionarios(dados);

    console.log("┌───────────┬──────────────────────────┬──────────────────┬───────────────┬────────────────────┐");
    console.log("│ Matrícula │            Nome          │Salário Bruto (R$)│Dedução INSS(%)│Salário Líquido (R$)│");
    console.log("├───────────┼──────────────────────────┼──────────────────┼───────────────┼────────────────────┤");
    
    dados.forEach((funcionario) => { 
        funcionario.salarioLiquido = funcionario.salarioBruto - funcionario.salarioBruto * funcionario.deducaoINSS;
        
        console.log(
            `│ ${funcionario.matricula.toString().padEnd(9)} │${funcionario.nome.padEnd(26)}│${funcionario.salarioBruto.toFixed(2).padEnd(18)}│${(funcionario.deducaoINSS * 100).toFixed(2).padEnd(15)}│${funcionario.salarioLiquido.toFixed(2).padEnd(20)}│`
        );
    });
    
    console.log("└───────────┴──────────────────────────┴──────────────────┴───────────────┴────────────────────┘");
}

function funcionarios(registro) {
    let funcionariosNomes = [
        "Cristiano Ronaldo", "Messi", "Mbappé", "Lewandowski", "Bruno Henrique", "Salah", "De Bruyne",
        "Kane", "Mané", "Sterling", "Lukaku", "Haaland", "Ramos", "Gabigol", "Varane", "Bonucci",
        "Zico", "Kimmich", "Marquinhos", "Alisson", "Neuer", "Kroos", "Modric", "De Jong", "Kanté",
        "Casemiro", "Fernandinho", "Henderson", "Pogba", "Grealish", "Kovacic", "Benzema",
        "Lautaro Martinez", "Ibrahimovic", "Suárez", "Cavani", "Aguero", "Depay", "Vardy",
        "Griezmann", "Dybala", "Bellingham", "Firmino", "Werner", "Vini Jr", "Zaha", "Mertens",
        "Militão", "Martinez", "Dzeko", "Endrik", "Rashford", "Son", "Onana"
    ];

    for (let i = 0; i < funcionariosNomes.length; i++) {
        registro.push({
            matricula: Math.round(Math.random() * 100000),
            nome: funcionariosNomes[i],
            salarioBruto: salarioBruto(),
            deducaoINSS: 0.12
        });
    }
}

function salarioBruto() {
    return Math.fround(Math.random() * 100000);
}
folhaDePagamentos();