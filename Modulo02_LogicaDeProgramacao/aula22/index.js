/*
Operações de comparação

> --> maior 

>= --> maior que ou igual a

< --> menor que

<= --> menor que ou igual a

== --> igualdade (valor) - não é muito usado em JS

=== --> igualdade estrita(valor e tipo)

!= --> diferente (valor) - não é muito usado em JS

!== --> diferente estrito(valor e tipo)


*/

const comp = 10 > 5;
console.log(comp);

const comp2 = 10 >= 10 ;
console.log(comp2);


const num1 = 10;
const num2 = 11;
const comp3 = num1 < num2;

console.log(comp3);

console.log(num1 <= num2);


//Correção de tipo
const num3 = 20;// number
const num4 = "20";// String

const comp5 = num3 == num4;
const comp6 = num3 === num4;
console.log(comp5);

console.log(comp6);

console.log(num3 != num4);
console.log(num3 !== num4);
