const readline = require('readline-sync');

// Array para armazenar os clientes
let clientes = [];

function lista() {
    console.log("======== MENU ========");
    console.log("1 - Listar Clientes");
    console.log("2 - Cadastrar Clientes");
    console.log("3 - Editar Cliente");
    console.log("4 - Remover Cliente");
    console.log("0 - Sair do sistema");
    console.log("======================");
    let opcao = readline.question('Opcao: ');
    console.log("======================");

    // if e else para cada opção
    if (opcao == '1') {
        listarClientes();
    } else if (opcao == '2') {
        cadastrarCliente();
    } else if (opcao == '3') {
        editarCliente();
    } else if (opcao == '4') {
        removerCliente();
    } else if (opcao == '0') {
        console.log('saindo do sistema...')
        return;
    } else {
        console.log('=== Comando invalido, selecione uma opção de 0 a 4 ===');
    }
    lista();
}

// função listarClientes
function listarClientes() {
    console.log("==== Lista de Clientes ====");
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
    } else {
        clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.nome}, Nascimento: ${cliente.nascimento}, CPF/CNPJ: ${cliente.cpf}`);
        });
    }
    console.log("===========================");
}

// função cadastrarCliente
function cadastrarCliente() {
    let nome = readline.question('Nome do cliente: ');
    let nascimento = readline.question('Data de nascimento (apenas numeros: ddmmyyyy): ');
    let cpf = readline.question('CPF ou CNPJ do Cliente: ');

    // Adicionando cliente ao Array
    clientes.push({ nome: nome, nascimento: nascimento, cpf: cpf });
    console.log("==== Cliente cadastrado com sucesso! ====");
}

// função editarCliente
function editarCliente() {
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    listarClientes(); // Mostra a lista de clientes para editar
    let selecionar = readline.questionInt('Digite o numero do cliente que deseja editar: ') - 1;

    if (selecionar >= 0 && selecionar < clientes.length) {
        let nome = readline.question('Novo nome do cliente: ');
        let nascimento = readline.question('Nova data de nascimento (ddmmyyyy): ');
        let cpf = readline.question('Novo CPF (AAABBBCCCDD): ');

        // Atualizar dados do cliente
        clientes[selecionar].nome = nome;
        clientes[selecionar].nascimento = nascimento;
        clientes[selecionar].cpf = cpf;

        console.log('Cliente editado com sucesso!');
    } else {
        console.log('Cliente não encontrado!');
    }
}

// função removerCliente
function removerCliente() {
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    listarClientes(); // Mostrar a listagem de clientes
    let selecionar = readline.questionInt('Digite o numero do cliente que deseja remover: ') - 1;

    if (selecionar >= 0 && selecionar < clientes.length) {
        // Removendo cliente do array
        clientes.splice(selecionar, 1);
        console.log('Cliente removido com sucesso!');
    } else {
        console.log('Cliente não encontrado!');
    }
}
lista();
