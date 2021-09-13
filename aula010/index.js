/**
 *      ()
 *      **
 *      * / %
 *      + -
 *      incremento = ++
 *      decremento = --
 * 
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log(num1 * num2 / num3);

let contador = 1;
contador++; // 2 incremento: primeiro ele executou a ação e dp ele icrementa
// o valor;
contador++; // 3
contador++; // 4
++contador; // 5 --> pre-incremento: primeiro ele incrementa o valor 
// e dp mostra o valor 


console.log(contador);

let contador2;

//====================================================================================


const passo = 2;
let cont = 0;

cont = cont + passo;
console.log(cont);

cont = cont + passo;
console.log(cont);

cont += passo;
console.log(cont);

const num4 = "Luiz";

console.log(num1 * num4);

// NaN --> Not a Number

/*
parseInt(inteiro)
parseFloat(decimais)

*/

const number1 = 10;
const number2 = parseInt('5');// converte para um valor numérico
const number3 = parseFloat('5.2');
const number4 = Number('8.9');

console.log(number1 + number2);
console.log(typeof number2);
console.log(typeof number3);