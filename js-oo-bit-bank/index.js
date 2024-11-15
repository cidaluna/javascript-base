import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// Criando um objeto OU criando uma instância da classe Cliente
const cliente1 = new Cliente("Cida",11122233309); 
const cliente2 = new Cliente("Alice",88822233309);


const contaCorrenteC1 = new ContaCorrente(cliente1, 1001);
contaCorrenteC1.depositar(200);
console.log(contaCorrenteC1);
const conta2 = new ContaCorrente(cliente2, 102);

console.log("\n::: Realizando uma transferência");
let valor = 10;
contaCorrenteC1.transferir(valor,conta2);
console.log(contaCorrenteC1);
console.log(conta2);

// Acessar só o cliente da conta 2
console.log("\n::: Retornando o cliente da conta2 ");
console.log(conta2._cliente);

// Quantas contas existem no BitBank
console.log("Total de contas abertas: ", ContaCorrente.qtdDeContas);