const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84
const altura = 1.8;
let anoNascimento;

const indiceMassaCorporal = peso / Math.pow(altura, 2);
anoNascimento = 2019 - idade;

console.log(nome + " " + sobrenome + " Tem " + 
30 + " anos, pesa " + peso + " kg");

// template Strings

console.log(`tem ${altura}
de altura e seu IMC é de i${indiceMassaCorporal} `);

console.log(nome, "nasceu em", anoNascimento, '.');