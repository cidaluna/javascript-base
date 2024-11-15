console.log("Conversão de Tipos:");  // o JS é fracamente tipado.

console.log("2" + "2");  // o JS junta as strings e retorna 22
console.log(parseInt("2") + parseInt("2"));  // já aqui o JS faz uma conversão de tipos de string para número
// Obs. em caso de soma de strings o JS nao entende o dado como numérico, é preciso do parse para deixar explicito!

console.log("10" / "2"); // Por outro lado, na divisão o JS interpreta que a divisão só pode ser com números e retorna 5.
console.log("7" / "2");
console.log(6.5 / 2);  // usar o ponto para números quebrados
console.log("Cida" / "2"); // retorna NaN (Not a Number) porque não consegue fazer a divisão se ambos não são números.

