/*
Raiz Quadrada: 
 é inteiro:
 É NaN: 
 Arredondando para baixo:
 Arredondando para cima:
 com duas casa decimais:
*/

const numero = Number(prompt('Digite um número'));
const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');

titulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}<p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;

//CONCLUIDO