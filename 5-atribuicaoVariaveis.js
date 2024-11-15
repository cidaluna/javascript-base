console.log("Trabalhando com atribuição de variáveis:"); // JS é case sensitive isso funciona

let primeiroNome = "Cida";  // sempre declarar o tipo da variável para ela não subir para o escopo global.
let sobrenome = "Luna"

console.log(primeiroNome + sobrenome); // não tem espaço, ele retorna CidaLuna
console.log(primeiroNome, sobrenome); // aqui a vírgula insere um espaço, retorna Cida Luna
console.log(primeiroNome + " " + sobrenome); // retorna Cida Luna

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);  // inserindo a interpolação

nomeCompleto = `${primeiroNome} ${sobrenome}`;  // const nao permite alterar o valor, ja a varivel let permite alterar o valor
console.log("Nome completo: ",nomeCompleto);

let contador = 0;
contador = contador + 1;
console.log(contador);

let idade;           // declarando variável
idade = 37;          // atribuindo valor
idade = idade + 1;   // reatribuindo o valor
console.log(idade);