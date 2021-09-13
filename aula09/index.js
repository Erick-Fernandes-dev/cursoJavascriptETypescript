// String, number, undefined, null, boolean

const nome = 'Erick';// string
const nome1 = "Erick";// string
const nome2 = `Erick`;// string

const num1 = 10; // number
const num2 = 10.52;// number

let nomeAluno; // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo ->  não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lõgico)

const a = 2;
const b = a;
console.log(a, b); // 2, 2


a = 3;
console.log(a, b); // 3, 2

