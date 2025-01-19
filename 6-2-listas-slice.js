const listaEstudantes = ["Joao", "Manoel", "Sofia", "Cida", "Angelica", "Maria", "Adão", "Davi", "Matheus", "Lucy"];

// dividir o array de estudantes em 2 com a mesma quantidade de dados em cada array
// método slice, primeiro parametro é o início e o segundo é o final (segundo é opcional)
const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log('Sala 1: ',sala1);
console.log('Sala 2: ',sala2);
