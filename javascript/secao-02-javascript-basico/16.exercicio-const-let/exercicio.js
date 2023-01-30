/*
Fernando Reis tem 29 anos, pesa 79 kg
tem 1.8 de altura e seu IMC é de 25.5
Fernando Reis nasceu em 1993.
*/

const nome = 'Fernando';
const sobrenome = 'Reis';
const idade = 29;
const peso = 79;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

// variaveis - tem atribuir valor. Exemplo a baixo.
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
//template strings.
console.log(`${nome} ${sobrenome} tem ${idade} pesa ${peso}kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);

