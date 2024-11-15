// No JS utilizamos o # para deixar um atributo privado
// Por convenção o _ também deveria deixar o atributo privado, mas utilizando ele vi que o saldo é exibido quando chamado fora da classe
export class ContaCorrente{ // Criado a classe ContaCorrente como um molde e o saldo é um atributo privado
    agencia;
    _saldo = 0;

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
}
