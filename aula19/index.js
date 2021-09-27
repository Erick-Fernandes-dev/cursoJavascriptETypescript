//OBJETOS EM JAVASCRIPT BASICO

//OBJETO LITERAL
/*
let pessoa1 = {

    nome: 'Erick',
    sobrenome: 'Fernandes',
    idade: 21

};

let pessoa2 = {
    nome: "Maria",
    sobrenome: "Oliveira",
    idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenomeh)



function CriaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}


const pessoa1 = CriaPessoa("Luiz", "Miranda",21);
const pessoa2 = CriaPessoa("Erick", "Fernandes",21);
const pessoa3 = CriaPessoa("Jose", "Morais",21);
const pessoa4 = CriaPessoa("Maria", "OLiveira",21);
const pessoa5 = CriaPessoa("Joshua", "Silva",21);

console.log(pessoa1.nome);


const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala(nome, sobrenome, idade) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;

        console.log(`${nome} ${sobrenome} esta falando oi...`)

    }
};

pessoa1.fala("Jose", "Manoel", 11)*/

const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala() {
        console.log(`Minha idade atual e ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();