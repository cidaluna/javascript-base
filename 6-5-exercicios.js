//1 - Crie uma função que receba dois arrays e os concatene em um único array.
const array1 = [1,2,3,4];
const array2 = [10,9,8,7];
const unionArrays = array1.concat(array2);
console.log(unionArrays);

//2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1,2,3,4,5,6,7,8,9,10];
const parteNumeros = numeros.slice(3, 8);
console.log(parteNumeros);

//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas);
const troca = frutas.splice(2,2,'Kiwi','Pêssego');
console.log(frutas);

//4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ["Macarrão", "Lasanha", "Arroz", "Torta de frango", "Cuscuz"];
const menuSobremesas = ["Bolo de chocolate", "Pudim", "Pavê", "Sorvete", "Salada de frutas"];
const menuCompleto = menuPrincipal.concat(menuSobremesas);
console.log(menuCompleto);

/*5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
Dicas:
    comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
    você pode resolver usando um for dentro de outro for.
*/
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

//6-Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matriz[1][2]);

//7-Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
matriz[2][1] = 15;
console.log(matriz);

//8-Crie uma funcao que recebe como argumento o nome de um aluno. Verifique se a pessoa faz parte da lista de alunos. Retorne a média do aluno correspondente na lista de médias.

const alunos = ["Joao", "Davi", "Luna", "Elaine"];
const medias = [10,8,9,9];
const lista = [alunos, medias];

function exibeNomeENota(aluno){
  if (lista[0].includes(aluno)){ // includes retorna true ou false
    // desestruturando a lista
    const [alunosDes, mediasDes] = lista;
    const indice = alunosDes.indexOf(aluno); // indexOf retorna o indice da 1ª ocorrencia do valor fornecido
    const mediaAluno = mediasDes[indice];
    console.log(`${aluno} tem a média ${mediaAluno}.`);
  } else {
    console.log('Estudante nao existe na lista!');
  }
}

exibeNomeENota('Luna');
exibeNomeENota('Angélica');