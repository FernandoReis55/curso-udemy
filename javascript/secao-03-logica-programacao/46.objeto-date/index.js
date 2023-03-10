//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/1969 Timestamp unix ou época unix
// const data = new Date(2019, 3); // ano, mês, dia, minuto, segundos, milisegundos

// const data = new Date('2019-04-20 20:20:50'); // geralmente assim é mais usado
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // MÊS COMEÇA DO ZERO 'JANEIRO'
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 - DOMINGO, 6 - SÁBADO
// console.log(data.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil);