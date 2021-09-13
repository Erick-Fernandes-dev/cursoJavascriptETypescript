// IEEE 754-2008 --> PADRAO EM QUE JAVASCRIPT SEGUE

let num1 = 10; // number
let num2 = 2.5345; // number

//console.log(num.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2)); representacao em binario

console.log(num2.toFixed(2));//casas decimais

console.log(Number.isInteger(num1));// retorna true se for um Number for um inteiro

let temp = num1 * "ola";
console.log(Number.isNaN(temp));// vai retorna true sempre quando for um NaN

let num3 = 0.7;
let num4 = 0.1;

num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.8
/*
num3 += num4; // 0.9
num3 += num4; // 1.0
num3 += num4; // 1.1
num3 += num4; // 1.2
num3 += num4; // 1.3
num3 += num4; // 1.4
num3 += num4; // 1.5
num3 += num4; // 1.6
num3 += num4; // 1.7
num3 += num4; // 1.8
num3 += num4; // 1.9
num3 += num4; // 2.0
*/
//num3 = parseFloat(num3.toFixed(2));
num3 = Number(num3.toFixed(2));

console.log(num3);
console.log(Number.isInteger(num3))

let num5 = 0.8;

num5 = Number(num5.toFixed(2));

console.log(num5.toFixed(2));






