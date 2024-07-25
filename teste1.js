const readline = require('readline-sync');


function somaApp() {
    console.log('******** BEM VINDO AO APP DE SOMA ********');
    let escolha = readline.question('Voce deseja prosseguir? Sim(s) ou Nao(n)');

    if (escolha == 's') {

        let numero1 = readline.question('Digite o primeiro numero: ');
        numero1 = +numero1
        let numero2 = readline.question('Digite o segundo numero: ');
        numero2 = +numero2

        let soma = numero1 + numero2;

        console.log('A soma de ' + numero1 + ' + ' + numero2 + ' e de ' + soma);
        console.log('App finalizado com sucesso!');
        return;

    } else if (escolha != 's' && escolha != 'n') {
        console.log('Valores invalidos! Por favor repita o processo')
        somaApp();
        return;
    }
    do {
        console.log('Voce decidiu saiu do App');
        break;

    } while (escolha == 'n')
}
somaApp();