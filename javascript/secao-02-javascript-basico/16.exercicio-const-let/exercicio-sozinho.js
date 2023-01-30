
// Fernando Reis tem 29 anos, pesa 79 kg
// Tem 1.8 de altura e seu IMC é de 25.5
// Fernando Reis nasceu em 1993.


const nome = 'Fernando';
const sobrenome = 'Reis';
const idade = 29;
const peso = 79;
const alturaEmM = '1.80';
let anoNascimento;
let indiceMassaCorporal; // peso / (altura * altura).

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso} kg.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);

// CONCLUIDO!!!