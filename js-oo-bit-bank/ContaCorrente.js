import { Cliente } from './Cliente.js';
// No JS utilizamos o # para deixar um atributo privado
// Por convenção o _ também deveria deixar o atributo privado, mas utilizando ele vi que o saldo é exibido quando chamado fora da classe
export class ContaCorrente{ // Criado a classe ContaCorrente como um molde e o saldo é um atributo privado
    agencia;
    _cliente;
    _saldo = 0;
    static qtdDeContas = 0;

    // definindo assessores get (faz a leitura) e set (recupera)
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    

    // melhor encapsulamento pois só permite ler o saldo
    get saldo(){
        return this._saldo;
    }

    // construtores servem para inicializar os atributos
    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.qtdDeContas += 1;  // é uma soma de todas as contas e nao algo individual
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
