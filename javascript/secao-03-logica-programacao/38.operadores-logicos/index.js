/*
Operadores Lógicos
&& - and - E - Todas as expressoes precisam ser verdadeiras para retornar true
|| - or - ou - 
! - not - não
*/

// const expressaoAnd = true && true && true;
// const expressaoOr = true || false;

const usuario = 'Luiz'; // form  usuário digitou
const senha = '123456'; // form  usuário digitou

const vaiLogar = usuario === 'luiz' || senha === '123456';
console.log(vaiLogar);