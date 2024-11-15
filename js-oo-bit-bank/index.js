class Cliente{  // a classe seria como um molde
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}


const cliente1 = new Cliente(); // Criando um objeto OU criando uma instância da classe Cliente
cliente1.nome = "Cida";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 154263987;

console.log(cliente1);

const cliente2 = new Cliente();
cliente2.cpf = 88822233309;
cliente2.nome = "Alice";
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente2);

console.log(cliente1,cliente2);