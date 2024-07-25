const readline = require('readline-sync');

function loop() {

    function nao() {
        console.log('Não faça pedido');
        return;
    }
    function sim() {
        console.log('Faça o pedido');
        return;
    }

    let resposta = readline.question('Voce esta com fome sim(s) ou nao(n)');

    if (resposta === 'n') {
        let resposta2 = readline.question('Voce comeu recentemente sim(s)');
        while (resposta2 === 's') {
            nao();
            break;
        }

    } else if (resposta === 's') {
        let resposta2 = readline.question('Tem alguma comida na casa sim(s) ou nao(n): ');

        if (resposta2 === 's') {


            let resposta3 = readline.question('Voce quer comer isso? ');

            while (resposta3 === 's') {
                nao();
                break;
            }
            while (resposta3 === 'n') {
                sim();
                break;
            }
        } else if (resposta2 === 'n') {
            sim();
        }
    } else {
        console.log('Opcao invalida saindo do sistema.')
        return;
    }
}
loop();