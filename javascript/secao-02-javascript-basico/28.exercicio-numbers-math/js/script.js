const numero = Number(prompt('Digite um número: ')); // Envolver o  number para converter String em Number em uma linha só.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

/*
Raiz Quadrada: 
 é inteiro:
 É NaN: 
 Arredondando para baixo:
 Arredondando para cima:
 com duas casa decimais:
*/

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}<p>`;
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}<p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}<p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}<p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}<p>`;