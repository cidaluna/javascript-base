// Desafio
// Crie uma lista de estudantes, Joao, Ana, Caio, Lara, Marjorie, Leo
// Porém, Ana e Caio mudaram de escola e Rodrigo entrou nessa sala. 
// Atualize a lista

const listaEstudantes = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
console.log('Lista de estudantes: ',listaEstudantes);

// Manipular o array com o método splice() que altera o próprio array
// No splice o primeiro parâmetro indica o start incluindo o indice, 
// o segundo param é a qtd de itens que serão deletados, e 
// o terceiro param é o elemento que vai ser incluido nesse lugar

listaEstudantes.splice(1, 2, 'Rodrigo');
console.log(listaEstudantes); // removeu e elementos (Ana e Caio), e adicionou Rodrigo

const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão'];
animaisDoAquario.splice(1, 0, 'sardinha');
console.log(animaisDoAquario); // [ 'baleia', 'sardinha', 'polvo', 'golfinho', 'tubarão' ]

animaisDoAquario.splice(3, 2, 'atum');
console.log(animaisDoAquario); // [ 'baleia', 'sardinha', 'polvo', 'atum' ]

