console.log("Trabalhando com condicionais: ");

// Criando um Array em Javascript
// As palavras reservadas no Javascript são também chamadas de token
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagem = false;
const destinoDesejado = 'Gramado';
const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

console.log("\nDestinos possíveis: ", listaDeDestinos);

console.log("Buscando pela cidade: ", destinoDesejado, "\n");

// Percorrer a lista de destinos e procurar se existe o destino desejado
// Utilizando o bloco while ele executa linha a linha mesmo se encontrar o destino ele continua o loop
let contador = 0;
let destinoExiste = false;

while(contador < 4){
    if(listaDeDestinos[contador] == destinoDesejado){
        destinoExiste = true;
        break;  // devo utilizar o break para parar forçado a execução do loop quando encontrar a cidade desajada
    }else{
        destinoExiste = false; // no else eu nao uso o break, deixo o fluxo while percorrer todas as cidades
    }
    contador = contador + 1;
}

console.log("O destino existe? ", destinoExiste);


if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}

// Testando o for
for(let cont=0; cont < 4; cont++){
    if(listaDeDestinos[cont] == destinoDesejado){
        destinoExiste = true;
    }else{
        destinoExiste = false;
    }
}

// Imprindo as cidade com o for
console.log("\nListando as cidades com o For:")
for(let i=0;i<listaDeDestinos.length;i++){
    console.log(`${i}: ${listaDeDestinos[i]}`);
}