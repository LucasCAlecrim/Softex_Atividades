// Logica de programação - questão 5

// Para ser lido no Node precisa abrir o Readline
const Readline = require('readline');

// Função Principal para iniciar o App IMC
function medidorIMC() {
    const rl = Readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Limpa o histórico de entrada
    rl.history = [];

    console.log('Programa medidor de Indice de Massa Corporal');

    rl.question('Digite seu nome: ', function (nome) {

        rl.question('Digite seu genero F para feminino e M para masculino: ', function (genero) {
            // Definindo genero 
            var generoTexto = genero.toUpperCase() === 'M' ? 'Masculino' : genero.toLocaleUpperCase() === 'F' ? 'Feminino' : 'Indefinido';

            rl.question('Digite sua Idade: ', function (idade) {
                rl.question('Digite seu Peso: ', function (peso) {
                    rl.question('Digite sua altura: ', function (altura) {
                        // Função para o Calculo do IMC
                        var IMC = peso / (altura * altura);



                        // Função para o calculo da Agua
                        var agua = peso * 35;

                        // Observações e modificações para as funções IMC e formatação do Calculo da Agua 
                        IMC = IMC.toFixed(1);
                        aguaFomatada = agua.toLocaleString('pt-BR');

                        // If e Else principal 
                        if (IMC < 18.5) {
                            console.log('Oi ' + nome + ' Peso: ' + peso + ' Altura: ' + altura + ' Genero: ' + generoTexto + ' Você está Abaixo do peso ideal e precisa ingerir ' + aguaFomatada + ' L Por dia');
                        }
                        else if (IMC >= 18.5 && IMC <= 24.9) {
                            console.log('Oi ' + nome + ' Peso: ' + peso + ' Altura: ' + altura + ' Genero: ' + generoTexto + ' Você está com o peso "Normal" e precisa ingerir ' + aguaFomatada + ' L Por dia');
                        }
                        else if (IMC >= 25 && IMC <= 29.9) {
                            console.log('Oi ' + nome + ' Peso: ' + peso + ' Altura: ' + altura + ' Genero: ' + generoTexto + ' Você está com "Sobrepeso" e precisa ingerir ' + aguaFomatada + ' L Por dia');
                        }
                        else if (IMC >= 30 && IMC <= 34.9) {
                            console.log('Oi ' + nome + ' Peso: ' + peso + ' Altura: ' + altura + ' Genero: ' + generoTexto + ' Você está com Obesidade Grau 1 (Leve) e precisa ingerir ' + aguaFomatada + ' L Por dia');
                        }
                        else if (IMC >= 35 && IMC <= 39.9) {
                            console.log('Oi ' + nome + ' Peso: ' + peso + ' Altura: ' + altura + ' Genero: ' + generoTexto + ' Você está com Obesidade Grau 2 (MODERADA) e precisa ingerir ' + aguaFomatada + ' L Por dia');
                        }
                        else if (IMC > 40) {
                            console.log('Oi ' + nome + ' Peso: ' + peso + ' Altura: ' + altura + ' Genero: ' + generoTexto + ' Você está com Obesidade Grau 3 (MORBIDA) e precisa ingerir ' + aguaFomatada + ' L Por dia');
                        }

                        // If else para Reiniciar o app ou finalizar o App

                        rl.question('Deseja Reiniciar o App ? (R) para Reiniciar e (F) para Finalizar: ', function (escolha) {
                            if (escolha.toUpperCase() == 'R') {
                                // Usei um close e depois retornei o programa pois o mesmo ao Reiniciar iniciar a função medidorIMC duas vezes
                                rl.close();
                                medidorIMC();
                            }
                            else if (escolha.toUpperCase() == 'F') {
                                console.log('---------- Programa Finalizado !! -------');
                                rl.close();
                            }
                            else {
                                console.log('Opção Invalida');
                                rl.close();
                            }
                        });
                    });
                });
            });
        });
    });
}
medidorIMC();

