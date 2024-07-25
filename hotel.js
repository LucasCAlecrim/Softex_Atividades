
const readline = require('readline-sync');

function hotel() {

    console.log("======== Calculadora de Hotel ========");
    console.log("======== Tipos de quarto ========");
    console.log("1- Standard");
    console.log("2- Luxo");
    console.log("3- Suite");
    console.log("0- Fechar Calculadora ");
    let quarto = readline.question('Qual a opcao de Quarto: ');
    let diaria = readline.question('Quantos dias : ');

    if (quarto == 1) {
        calculoValor = diaria * 150.00;
        calculoValorFormatado = calculoValor.toLocaleString('pt-BR');
        console.log('O valor e de : ' + calculoValor + ' Para o Standart');
        console.log('=================================');

    } else if (quarto == 2) {
        calculoValor = diaria * 300.00;
        calculoValorFormatado = calculoValor.toLocaleString('pt-BR');

        console.log('O valor e de : ' + calculoValorFormatado + 'R$ Para o Luxo');


    } else if (quarto == 3) {
        calculoValor = diaria * 500.00;
        calculoValorFormatado = calculoValor.toLocaleString('pt-BR');
        console.log('O valor e de :' + calculoValor + ' Para a Suite');


    } else if (quarto == '0') {
        console.log(`Saindo do sistema !!`);

        return;
    } else {
        console.log('Opção invalida')
        return;
    }
}
hotel();