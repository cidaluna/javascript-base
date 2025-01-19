console.log("Trabalhando com listas: ");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log('Destinos possíveis: ');
// console.log(salvador, saoPaulo, rioDeJaneiro);

// Criando um Array em Javascript
// As palavras reservadas no Javascript são também chamadas de token
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

console.log(listaDeDestinos);
listaDeDestinos.push(`São Carlos`);  // adicionando um item na lista
console.log(listaDeDestinos);

// Supondo que desejo excluir da lista São Paulo
// utilizamos o splice para excluir um ou mais itens da lista
// as posições do array conhecidas como índices começam sempre na posição zero
listaDeDestinos.splice(1,1); // o splice quer saber a posicao inicial e a quantidade de itens a excluir
console.log(listaDeDestinos);

// Supondo que desejo imprimir apenas uma cidade específica
// por exemplo, Curitiba, eu aplico no console para ser exibido apenas o índice de Curitiba
console.log(listaDeDestinos[2]);


// Acessar o último item da lista de Destinos
const ultimo = listaDeDestinos[listaDeDestinos.length - 1];
console.log("O último item da lista de Destinos é", ultimo);


// Adicionar uma cidade no ínicio da lista
let add = listaDeDestinos.unshift("Gramado");
console.log(listaDeDestinos);