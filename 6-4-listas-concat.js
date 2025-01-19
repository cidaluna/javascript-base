// Juntar as 2 salas de alunos em 1 array
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Cida", "Ju", "Heitor"];

const salasJuntas = salaJS.concat(salaPython);
console.log(salasJuntas);

// Criar uma lista de listas
const alunos = ["Joao", "Cida", "Caio", "Ana"];
const medias = [10,8,7.5,9];

const lista = [alunos, medias];
console.log(lista);

// Retorne Cida e a nota 8
console.log(`A aluna da posição 1 da lista é ${lista[0][1]} 
  e sua nota é ${lista[1][1]}.`);