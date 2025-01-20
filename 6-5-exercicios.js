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

//9-Imprima no console cada item do array junto com seu indice.
const notas = [10,8.5,5,6.5,8,7.5];

for(let i=0;i<notas.length;i++){
  console.log(`Índice: ${i}, nota: ${notas[i]}`);
}

//10-Somar as notas do array com o for...of
const notasMes = [10,10,2,5,7,5.5];
let somaDasNotas = 0;

for(const element of notasMes){
  somaDasNotas += element;
}
console.log(somaDasNotas);
const mediaNotas = somaDasNotas / notasMes.length;
console.log(`A média das notas é ${mediaNotas.toFixed(2)}.`);

//11-Somar as notas do array com o forEach
const notasNew = [10,10,2,5,7,5.5];
let somaNotas = 0;

notasNew.forEach(function (nota){
  somaNotas += nota;
})

console.log(somaNotas);
const mediaN = somaNotas / notasNew.length;
console.log(`A média das notas é ${mediaN.toFixed(2)}.`);

//12-Adicionar 1 ponto em cada nota do aluno, utilizando o metodo map()
const n = [10, 9.5, 8, 7, 6];

// garantir que não tenha nota maior que 10
const nAtualizadas = n.map((nota) => nota + 1 >= 10 ? 10 : nota+1);

console.log(nAtualizadas);

/**
 * Enquanto o método forEach não retorna nenhum tipo de dados, o método map() sempre retorna um array. Caso a função callback não tenha nenhum dado de retorno, ainda assim o resultado de map() será um array vazio. Por isso qualquer tentativa de retornar resultados de forEach e armazená-los em variáveis vai resultar em undefined.
 */

//13-Padronizar os nomes para que todos estejam com letras maiusculas utilizando o map()
const nomes = ["ana Julia", "Caio viNicius", "CIDA lUna", "Bia GoncalveS"];
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesPadronizados);

//14-Imprimir cada elemento do array
const arrayA = ['a', 'b', 'c'];
arrayA.forEach((element) => console.log(element));

const meuArray = ['a', 'b', 'c', 'd', 'e'];
meuArray.forEach((elemento, indice) => {
  console.log(`Índice: ${indice}, Valor: ${elemento}`);
});

//15-Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback); // Executa a função de callback em cada elemento do array
}

function dobraNumero(num) {
    return num * 2; // Função de exemplo para dobrar o número
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados); 

//16-Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numerosA = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < numerosA.length; i++) {
  if (numerosA[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);

//17-Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B. Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
console.log(todasAsTurmas);

const alunoProcurado = todasAsTurmas.find(nome => nome === 'Lucas Fernandes');

if(alunoProcurado){
  console.log('Aluno encontrado: ', alunoProcurado);
} else {
  console.log('Aluno nao encontrado');
}

//18-Considere um array de números inteiros.Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.
const num = [6, 9, 12, 15, 18, 21];

console.log('Elementos do array multiplicados por 3:');

num.forEach(numero => {
  const resultado = numero * 3;
  console.log(resultado);
});

const indiceDoNumero18 = num.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está num array no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}

//19-Dado um array de alunos e suas médias, exibir o nome do aluno que está reprovado, pois teve média menor que 7.
const nom = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const med = [7, 4.5, 8, 5.5];

//Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no novo array, e quando ela retorna falso, ou false, o elemento é descartado.
const reprovados = nom.filter((aluno, indice) => {
  return med[indice] < 7;
});

console.log("Reprovados: ",reprovados);

//20-Com a media de todos os alunos das 3 salas, calcule a media geral de cada sala
const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function calculaMedia(listNotas){
  const somaDasNotasA = listNotas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  const mediaA = somaDasNotasA / listNotas.length;
  return mediaA;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

//21-Considere a lista de notas [7,7,8,9], crie uma nova lista adicionando a nota 10, sem alterar a lista original

const no = [7,7,8,9];

// spread operator para manter os dados (clonar) e o 10 para ser adicionado ao final do array
const novaListaNotas = [...no, 10]; 

console.log(no);
console.log(novaListaNotas);

//22-Remover dados duplicados do array
const dados = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = new Set(dados); // Set é um conjunto de valores únicos, mas ele não tem acesso aos métodos de array, ele só parece um array mas não é.

const listaNomesAtualizados = [...nomesAtualizados];
console.log(nomesAtualizados);
console.log(typeof nomesAtualizados);
console.log(listaNomesAtualizados);
console.log(typeof listaNomesAtualizados);

//23-Unir as listas e remover os duplicados
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Cores sem repetir: ', coresUnicas);

//24-Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares
function filtraNumerosPares(arr) {
  return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}

const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log("Pares: ",listaNumerosPares);

//25-Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const listaNumerosA = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}

const numerosFiltrados = filtraNumeros(listaNumerosA);
console.log("Múltiplos de 3 e maiores que 5: ",numerosFiltrados);

//26-Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somaElementosDoArray(arr) {
  return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
}

const listaNumerosB = [1, 2, 3, 4, 5];
const somaTotal = somaElementosDoArray(listaNumerosB);
console.log("Soma: ",somaTotal);
