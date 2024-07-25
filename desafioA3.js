const readline = require('readline-sync');

// Array para membro
let membro = [];

function menu() {
    console.log("======== MENU ========");
    console.log("1 - Listar tarefas");
    console.log("2 - Cadastrar membros");
    console.log("3 - Cadastrar tarefas");
    console.log("4 - Editar Membros");
    console.log("5 - Editar Tarefas");
    console.log("6 - Remover membros");
    console.log("7 - Remover Tarefas");
    console.log("0 - Sair do sistema");
    console.log("======================");
    let opcao = readline.question('Opcao: ');
    console.log("======================");

    // if else 
    if (opcao == '1') {
        listarMembro();
    } else if (opcao == '2') {
        let nome = readline.question('Nome do Membro: ');
        let cpf = readline.question('CPF do Membro: ');
        cadastrarMembro(nome, cpf);
    } else if (opcao == '3') {
        cadastrarTarefa();
    } else if (opcao == '4') {
        editarMembro();
    } else if (opcao == '5') {
        editarTarefa();
    } else if (opcao == '6') {
        removerMembro();
    } else if (opcao == '7') {
        removerTarefa();
    } else if (opcao == '0') {
        console.log('=== Saindo do sistema ===');
        return;
    } else {
        console.log('=== Comando invalido, selecione uma opcao de 0 a 7 ===');
    }
    menu();
}

// Função Listar 
function listarMembro() {
    membros.forEach((tarefa, index) => {
        console.log(`${index + 1}. Titulo: ${tarefa.titulo}, descricao: ${tarefa.descricao}`);
        if (membro.tarefa.length > 0) {
            membro.tarefa.forEach((tarefa, index) => {
                console.log(`  Tarefa ${index + 1}: ${tarefa}`);
            });
        } else {
            console.log(`  Nenhuma tarefa atribuida`);
        }
    });
}

// Função Cadastrar membro 
function cadastrarMembro(nome, cpf) {
    const membro = {
        nome: nome,
        cpf: cpf,
        tarefa: []
    };
    membros.push(membro);
    console.log(`Membro ${nome} adicionado a equipe!`);
}

// Função Cadastrar Tarefas
function cadastrarTarefa() {
    listarEquipe(); 
    let selecionar = readline.questionInt('Digite o numero do membro para adicionar a tarefa: ') - 1;

    if (selecionar >= 0 && selecionar < membros.length) {
        let descricao = readline.question('Descricao da Tarefa: ');
        membros[selecionar].tarefa.push(descricao);
        console.log(`Tarefa "${descricao}" adicionada ao membro ${membros[selecionar].nome}`);
    } else {
        console.log('Membro nao encontrado.');
    }
}

// Função Editar Membro
function editarMembro() {
    if (membros.length === 0) {
        console.log('Nenhum Membro Cadastrado');
        return;
    }

    listarEquipe(); 
    let selecionar = readline.questionInt('Digite o numero do membro que deseja editar: ') - 1;

    if (selecionar >= 0 && selecionar < membros.length) {
        let nome = readline.question('Novo nome do Membro: ');
        membros[selecionar].nome = nome;
        let cpf = readline.question('Novo CPF do Membro: ');
        membros[selecionar].cpf = cpf;
        console.log('Membro editado com sucesso!');
    } else {
        console.log('Membro nao encontrado.');
    }
}

// Função Editar Tarefa
function editarTarefa() {
    if (membros.length === 0) {
        console.log('Nenhum Membro Cadastrado');
        return;
    }

    listarEquipe(); 
    let selecionarMembro = readline.questionInt('Digite o numero do membro que deseja editar a tarefa: ') - 1;

    if (selecionarMembro >= 0 && selecionarMembro < membros.length) {
        if (membros[selecionarMembro].tarefa.length === 0) {
            console.log('Nenhuma tarefa atribuida a este membro.');
            return;
        }

        membros[selecionarMembro].tarefa.forEach((tarefa, index) => {
            console.log(`  ${index + 1}. ${tarefa}`);
        });

        let selecionarTarefa = readline.questionInt('Digite o numero da tarefa que deseja editar: ') - 1;

        if (selecionarTarefa >= 0 && selecionarTarefa < membros[selecionarMembro].tarefa.length) {
            let novaDescricao = readline.question('Nova descricao da Tarefa: ');
            membros[selecionarMembro].tarefa[selecionarTarefa] = novaDescricao;
            console.log('Tarefa editada com sucesso!');
        } else {
            console.log('Tarefa nao encontrada.');
        }
    } else {
        console.log('Membro nao encontrado.');
    }
}

// Função Remover Membro
function removerMembro() {
    if (membros.length === 0) {
        console.log('Nenhum Membro Cadastrado');
        return;
    }

    listarEquipe(); 
    let selecionar = readline.questionInt('Digite o numero do membro que deseja remover: ') - 1;

    if (selecionar >= 0 && selecionar < membros.length) {
        membros.splice(selecionar, 1);
        console.log('Membro removido com sucesso!');
    } else {
        console.log('Membro nao encontrado.');
    }
}

// Função Remover Tarefa
function removerTarefa() {
    if (membros.length === 0) {
        console.log('Nenhum Membro Cadastrado');
        return;
    }

    listarEquipe(); 
    let selecionarMembro = readline.questionInt('Digite o numero do membro que deseja remover a tarefa: ') - 1;

    if (selecionarMembro >= 0 && selecionarMembro < membros.length) {
        if (membros[selecionarMembro].tarefa.length === 0) {
            console.log('Nenhuma tarefa atribuida a este membro.');
            return;
        }

        membros[selecionarMembro].tarefa.forEach((tarefa, index) => {
            console.log(`  ${index + 1}. ${tarefa}`);
        });

        let selecionarTarefa = readline.questionInt('Digite o numero da tarefa que deseja remover: ') - 1;

        if (selecionarTarefa >= 0 && selecionarTarefa < membros[selecionarMembro].tarefa.length) {
            membros[selecionarMembro].tarefa.splice(selecionarTarefa, 1);
            console.log('Tarefa removida com sucesso!');
        } else {
            console.log('Tarefa nao encontrada.');
        }
    } else {
        console.log('Membro nao encontrado.');
    }
}

menu();
