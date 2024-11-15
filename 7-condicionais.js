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
const temPassagem = true;

console.log("Destinos possíveis: ", listaDeDestinos);

// Condicional (if else) se comprador for maior de idade,
// então pode exibir a lista de destinos
// e pode remover da lista o destino que quiser
// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade!");
//     console.log(listaDeDestinos);
//     // remover Rio de Janeiro da lista
//     listaDeDestinos.splice(2,1);
//     console.log(listaDeDestinos);
//     }else if(estaAcompanhada){
//         // Menor acompanhado
//         console.log("Comprador está acompanhado!");
//         // remover Rio de Janeiro da lista
//         listaDeDestinos.splice(2,1);
//         console.log(listaDeDestinos);
//     }else{
//         console.log("Menor e não está acompanhado!!");
// }


// bloco refatorado
if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem!"); // Comprador maior de idade OU está acompanhado!
    listaDeDestinos.splice(2,1);
    console.log(listaDeDestinos);
    }else{
        console.log("Menor e não está acompanhado!!");
}

console.log("Embarque: \n ");  // o uso de \n para quebrar linha
if((idadeComprador >= 18 && temPassagem) || (temPassagem && estaAcompanhada)){
    console.log("Liberado!");
}else{
    console.log("Embarque não permitido!");
}

// ctrl k + ctrl c para comentar
// ctrl k + ctrl u para descomentar
// console.log(idadeComprador > 18);  // maior do que 18? retorno false 15 é menor
// console.log(idadeComprador < 18);  // menor do que 18? true 15 é menor
// console.log(idadeComprador >= 18);  // maior ou igual a 18? false
// console.log(idadeComprador <= 18);  // menor ou igual a 18? true 15 é menor
// console.log(idadeComprador == 18);  //é igual a 18? false 15 é menor
