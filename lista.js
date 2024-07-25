const readline = require('readline-sync');
function lista() {
    let listas = [];

    let pergunta = readline.question('Deseja fazer uma lista? Sim(s) ou Nao(n)');

    if (pergunta != 's' && pergunta != 'n') {
        console.log('Resposta invalida tente novamente');
        lista()
        return;

    } else if (pergunta == 'n') {
        console.log('Voce saiu do app');
        return;
    }

    do {
        let pergunta = readline.question('Adicione um numero: ');
        pergunta = +pergunta
        listas.push(pergunta);
        console.log(listas);

        let pergunta2 = readline.question('Deseja continuar: Sim(s) ou Nao(n)')
        if (pergunta2 == 'n') {
            console.log('Saindo do sistema');
            break;
        } else if (pergunta2 != 'n' && pergunta2 != 's') {
            console.log('Valor invalido tente novamente');
            lista();
        }

    }
    while (pergunta == 's')

}
lista()