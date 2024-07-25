const readline = require('readline-sync');

// Arrays globais para desenvolvedores, projetos e associacoes
let desenvolvedores = [];
let projetos = [];
let juncao = [];

console.log('=== Lista dev / projetos ===');

menu();
function menu() {
    console.log('============= ABA FUNCIONARIO =================');
    console.log('1 - Listar desenvolvedores');
    console.log('2 - Adicionar desenvolvedores');
    console.log('3 - Editar desenvolvedores');
    console.log('============= ABA PROJETOS =================');
    console.log('4 - Listar projetos');
    console.log('5 - Adicionar Projetos');
    console.log('6 - Editar Projetos');
    console.log('=============== BUSCA ===============');
    console.log('7 - Catalogar desenvolvedores em projetos');
    console.log('8 - Catalogar projetos para desenvolvedores');
    console.log('============= ASSOCIACAO =================');
    console.log('9 - Associar desenvolvedor a projeto');
    console.log('==============================');
    console.log('0 - Sair');

    let opcao = readline.question('Opcao: ');

    switch (opcao) {
        case '1':
            listarDesenvolvedores();
            break;
        case '2':
            adicionarDesenvolvedor();
            break;
        case '3':
            editarDesenvolvedor();
            break;
        case '4':
            listarProjetos();
            break;
        case '5':
            adicionarProjeto();
            break;
        case '6':
            editarProjeto();
            break;
        case '7':
            catalogarDesenvolvedoresPorProjetos();
            break;
        case '8':
            catalogarProjetosPorDesenvolvedores();
            break;
        case '9':
            associarDesenvolvedorAProjeto();
            break;
        case '0':
            console.log('=== Saindo do sistema ===');
            return;
        default:
            console.log('=== Comando invalido, selecione uma opcao de 0 a 9 ===');
    }
    menu();
}

// Funcao Listar desenvolvedores
function listarDesenvolvedores() {
    desenvolvedores.forEach((desenvolvedor, index) => {
        console.log(`${index + 1}. Nome: ${desenvolvedor.nome}. Funcao: ${desenvolvedor.funcao}`);
    });
}

// Funcao Adicionar desenvolvedor
function adicionarDesenvolvedor() {
    let nome = readline.question('Nome do Desenvolvedor: ');
    let funcao = readline.question('Funcao: ')
    let idade = readline.question('Idade: ')
    const desenvolvedor = {
        id: desenvolvedores.length + 1,
        nome: nome,
        funcao: funcao,
        idade: idade
    };
    desenvolvedores.push(desenvolvedor);
    console.log(`Desenvolvedor ${nome} cadastrado!`);
}

// Funcao Editar desenvolvedor
function editarDesenvolvedor() {
    listarDesenvolvedores();
    let id = readline.questionInt('Digite o numero do desenvolvedor que deseja editar: ') - 1;
    if (id >= 0 && id < desenvolvedores.length) {
        let nome = readline.question('Novo nome do Desenvolvedor: ');
        let funcao = readline.question('Nova funcao do Desenvolvedor: ');
        desenvolvedores[id].nome = nome;
        desenvolvedores[id].funcao = funcao;
        console.log(`Desenvolvedor atualizado ${nome}!`);
        console.log(`Funcao atualizada ${funcao} !`)
    } else {
        console.log('Desenvolvedor nao encontrado.');
    }
}

// Funcao Listar projetos
function listarProjetos() {
    projetos.forEach((projeto, index) => {
        console.log(`${index + 1}. Nome: ${projeto.nome}`);
    });
}

// Funcao Adicionar projeto
function adicionarProjeto() {
    let nome = readline.question('Nome do Projeto: ');
    const projeto = {
        id: projetos.length + 1,
        nome: nome
    };
    projetos.push(projeto);
    console.log(`Projeto ${nome} adicionado!`);
}

// Funcao Editar projeto
function editarProjeto() {
    listarProjetos();
    let id = readline.questionInt('Digite o numero do projeto que deseja editar: ') - 1;
    if (id >= 0 && id < projetos.length) {
        let nome = readline.question('Novo nome do Projeto: ');
        projetos[id].nome = nome;
        console.log(`Projeto atualizado para ${nome}!`);
    } else {
        console.log('Projeto nao encontrado.');
    }
}

// Funcao Catalogar desenvolvedores por projetos
function catalogarDesenvolvedoresPorProjetos() {
    listarProjetos();
    let idProjeto = readline.questionInt('Digite o numero do projeto: ') - 1;
    if (idProjeto >= 0 && idProjeto < projetos.length) {
        console.log(`Desenvolvedores no projeto ${projetos[idProjeto].nome}:`);
        juncao.forEach(relacao => {
            if (relacao.idProjeto === projetos[idProjeto].id) {
                let desenvolvedor = desenvolvedores.find(dev => dev.id === relacao.idDesenvolvedor);
                console.log(`- ${desenvolvedor.nome} funcao: ${desenvolvedor.funcao}`);
            }
        });
    } else {
        console.log('Projeto nao encontrado.');
    }
}

// Funcao Catalogar projetos por desenvolvedores
function catalogarProjetosPorDesenvolvedores() {
    listarDesenvolvedores();
    let idDesenvolvedor = readline.questionInt('Digite o numero do desenvolvedor: ') - 1;
    if (idDesenvolvedor >= 0 && idDesenvolvedor < desenvolvedores.length) {
        console.log(`Projetos do desenvolvedor ${desenvolvedores[idDesenvolvedor].nome} ${desenvolvedores[idDesenvolvedor].funcao}: `);
        juncao.forEach(relacao => {
            if (relacao.idDesenvolvedor === desenvolvedores[idDesenvolvedor].id) {
                let projeto = projetos.find(proj => proj.id === relacao.idProjeto);
                console.log(`- ${projeto.nome}`);
            }
        });
    } else {
        console.log('Desenvolvedor nao encontrado.');
    }
}

// Funcao para associar um desenvolvedor a um projeto
function associarDesenvolvedorAProjeto() {
    listarDesenvolvedores();
    let idDesenvolvedor = readline.questionInt('Digite o numero do desenvolvedor: ') - 1;
    listarProjetos();
    let idProjeto = readline.questionInt('Digite o numero do projeto: ') - 1;
    if (idDesenvolvedor >= 0 && idDesenvolvedor < desenvolvedores.length && idProjeto >= 0 && idProjeto < projetos.length) {
        juncao.push({ idDesenvolvedor: desenvolvedores[idDesenvolvedor].id, idProjeto: projetos[idProjeto].id });
        console.log(`Desenvolvedor ${desenvolvedores[idDesenvolvedor].nome} associado ao projeto ${projetos[idProjeto].nome}!`);
    } else {
        console.log('Desenvolvedor ou projeto nao encontrado.');
    }
}
