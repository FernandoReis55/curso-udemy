/*if - se
elfe - se não
*/

/*
Entre 0 - 11 - Bom Dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa Noite
*/


//If -> Pode ser usado sozinho.
// Else -> Sempre que utilizo a palavra else, preciso de um if antes.
// Eu posso ter varios else if na checagem.
// Só posso ter um else na checagem.
// Podemos usar condições sem else if, utilizando if e else

const hora = 15;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('olá');
}
