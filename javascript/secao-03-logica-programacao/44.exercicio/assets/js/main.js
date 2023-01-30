
// Capturar evento de submit do formulario
const form = document.querySelector('#formulario');

// evento de submit, nao deixa enviar o formulario.
form.addEventListener('submit', function (e) {
    e.preventDefault ();
    // captura dos inputs.
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // conversão do value para number.
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // se retornar NaN, recolher e retornar o setResultado com false.
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    // se retornar NaN, recolher e retornar o setResultado com false.
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    //criou o imc para calcular.
    const imc = getImc (peso, altura);
    const grauImc = getGrauImc(imc); // texto de grau do imc.

    const msg = `Seu IMC é ${imc} (${grauImc}).`; // mensagem para o usuário.

    setResultado(msg, true);

    //Código Continua..
});

// array com lista de strings, checando de tras para frente.
function getGrauImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0]; 
}
// calculo imc.
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função para criar parágrafo
function criaP () {
    const p = document.createElement('p');
    return p;
}

//seta o resultado e cria parágrafo.
function setResultado (msg,isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP ();
    // verfica se é válido.
    if (isValid) {
        p.classList.add('paragrafo-resultado'); 
    } else {
        p.classList.add('bad'); 
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}