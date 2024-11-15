import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente(); // Criando um objeto OU criando uma instância da classe Cliente
cliente1.nome = "Cida";
cliente1.cpf = 11122233309;
cliente1.rg = 154263987;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2, "\n");

const contaCorrenteC1 = new ContaCorrente();
contaCorrenteC1.agencia = 1001;
contaCorrenteC1.cliente = cliente1;

contaCorrenteC1.depositar(100);
contaCorrenteC1.depositar(100);
// console.log(contaCorrenteC1.saldo); // 100  (nao posso mais acessar atributo privado por aqui)
contaCorrenteC1.depositar(-10); // o método depositar não permite valor negativo, embora eu esteja tentando isso

const valorSacado = contaCorrenteC1.sacar(50); // chamando método sacar
console.log(valorSacado);
console.log(contaCorrenteC1);  // imprime os dados da agência (saldo privado com # nao imprime, com _ imprime).

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);

// Transferência
contaCorrenteC1.transferir(10,conta2);
console.log(contaCorrenteC1);
console.log(conta2);

// Acessar só o cliente da conta 2
console.log("\nRetornando o cliente da conta2: ");
console.log(conta2._cliente);