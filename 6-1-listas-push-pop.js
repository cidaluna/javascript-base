/**
 * Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, ou item, e cada elemento se localiza numa posição fixa na lista chamada de índice.
 */
const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log('Média: ',media);

const arrayDeNumeros = [57, 37, 70];
console.log(arrayDeNumeros);

const arrayDeStrings = ["banana", "alura", "Cida"];
console.log(arrayDeStrings);

const notasAluno = [10,6,8];
notasAluno.push(7);  // método push adiciona uma nota no final do array de notas do Aluno
const mediaAluno = (notasAluno[0]+notasAluno[1]+notasAluno[2]+notasAluno[3]) / notasAluno.length;
console.log('Média de notas do aluno: ',mediaAluno);

// método pop() remove o último elemento do array
const valores = [10,6,8,5.5,10];
console.log('Valores: ', valores);
valores.pop();
console.log('Valores: ', valores);
const mediaValores = (valores[0]+valores[1]+valores[2]+valores[3]) / valores.length;
console.log('Média: ',mediaValores);
console.log('Média formatada: ',mediaValores.toFixed(2)); // fixar a qtd de casas numéricas