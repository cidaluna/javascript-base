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

