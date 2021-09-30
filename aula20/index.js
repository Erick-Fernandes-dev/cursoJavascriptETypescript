/**
 * Primitivos (Imutáveis) - string, number, boolean, undefined,
 * null (bigint, symbol) --> Valores copiados
 * 
 
valor imutável
let nome  = 'Luiz';
nome[0] = 'R'
console.log(nome[0], nome)



let a = "A";
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);

console.log("==================================================")

/**
 * Refência (Mutável) - array, object, function --> Passados por referência
 * é criada uma referência para omesmo valor na memória
 

let a = [1, 2, 3];
let b = a;//aponta para o mesmo valor de a, ou seja, b vai receber os valores de a
// b referência o mesmo valor de a na memória do computador
b = [...a]//vai apenas copiar o valor da variável a para dentro do b
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

c.push("Erick");
console.log(a, c);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio' 
};

const b = a;

//const b = {...a};//copia o valor da variável a para dentro da variável b

b.nome = 'João';
console.log(a);
console.log(b);









