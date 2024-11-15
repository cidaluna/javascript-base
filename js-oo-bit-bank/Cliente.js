export class Cliente{  // a classe Cliente é como um molde
    nome;
    _cpf;
    
    get cpf(){
        return this._cpf;
    }

    // construtores servem para inicializar os atributos
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
