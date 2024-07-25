const readline = require('readline-sync');
// Array para tarefas
let tarefas = [];
function menu() {
    console.log("======== MENU ========");
    console.log("1 - Listar tarefas");
    console.log("2 - Cadastrar tarefa");
    console.log("3 - Editar tarefa");
    console.log("4 - Remover tarefa");
    console.log("0 - Sair do sistema");
    console.log("======================");
    let opcao = readline.question('Opcao: ');
    console.log("======================");
    // if else 
    if (opcao == '1') {
        listarTarefas();
    } else if (opcao == '2') {
        cadastrarTarefa();
    } else if (opcao == '3') {
        editarTarefa();
    } else if (opcao == '4') {
        removerTarefa();
    } else if (opcao == '0') {
        console.log('=== Saindo do sistema ===');
        return;
    } else {
        console.log('=== Comando invalido, selecione uma opcao de 0 a 4 ===');
    }
    menu();
}
// Função para listar tarefas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
    } else {
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. Titulo: ${tarefa.titulo}, Descricao: ${tarefa.descricao}`);
        });
    }
}
// Função para cadastrar tarefa
function cadastrarTarefa() {
    let titulo = readline.question('Titulo da Tarefa: ');
    let descricao = readline.question('Descricao da Tarefa: ');

    const tarefa = {
        titulo: titulo,
        descricao: descricao
    };
    tarefas.push(tarefa);
    console.log(`Tarefa "${titulo}" adicionada com sucesso!`);
}
// Função para editar tarefa
function editarTarefa() {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
        return;
    }
    listarTarefas();
    let selecionar = readline.questionInt('Digite o numero da tarefa que deseja editar: ') - 1;
    if (selecionar >= 0 && selecionar < tarefas.length) {
        let novoTitulo = readline.question('Novo titulo da Tarefa: ');
        let novaDescricao = readline.question('Nova descricao da Tarefa: ');

        tarefas[selecionar].titulo = novoTitulo;
        tarefas[selecionar].descricao = novaDescricao;
        console.log('Tarefa editada com sucesso!');
    } else {
        console.log('Tarefa nao encontrada.');
    }
}
// Função para remover tarefa
function removerTarefa() {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
        return;
    }
    listarTarefas();
    let selecionar = readline.questionInt('Digite o numero da tarefa que deseja remover: ') - 1;
    if (selecionar >= 0 && selecionar < tarefas.length) {
        tarefas.splice(selecionar, 1);
        console.log('Tarefa removida com sucesso!');
    } else {
        console.log('Tarefa nao encontrada!');
    }
}
menu();
