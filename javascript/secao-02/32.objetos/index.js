// [] - Arrays
// {} - Objetos

// const pessoa1 = {
//     nome: 'Fernando',
//     sobrenome: 'Reis',
//     idade: 25
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
//FIM.

// function criaPessoa (nome, sobrenome, idade) { // 2 jeitos abaixo de chamar função.
//     // return { nome, sobrenome, idade};

//     // return {
//     //     nome: nome,
//     //     sobrenome: sobrenome,
//     //     idade: idade
//     // };
// }

// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Maria', 'Silva', 45);
// const pessoa3 = criaPessoa('José', 'Oliveira', 55);

// console.log(pessoa1.nome, pessoa2.sobrenome);
//FIM.

const pessoa1 = {
    nome: 'Fernando',
    sobrenome: 'Rocha',
    idade: 29,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();