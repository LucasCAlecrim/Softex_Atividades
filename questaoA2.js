const readline = require('readline');

function media() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Programa calculo de média');

    rl.question('Insira a nota da primeira prova: ', (nota1) => {
        rl.question('Insira a nota da segunda prova: ', (nota2) => {



            nota1 = parseFloat(nota1);
            nota2 = parseFloat(nota2);

            let mediaCalc = (nota1 + nota2) / 2;
            mediaCalc = mediaCalc.toFixed(1);

            if (mediaCalc >= 7) {
                console.log('Parabéns! Você foi aprovado com média ' + mediaCalc);
            } else if (mediaCalc >= 5) {
                console.log('Você está de recuperação com média ' + mediaCalc);
            } else {
                console.log('Infelizmente você foi reprovado com média ' + mediaCalc);
            }
            rl.close();
        });
    });
}

media();
