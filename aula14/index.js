//                   
let umaString = "Um \"Texto\""; // serve para espacar um caractere

//                01234567
let umaString2 = "Um texto";

//Tres formas de concatenar
console.log(umaString2.concat(' em', ' um', ' lindo dia.'));
console.log(umaString2 + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);// mais recomendado de se usar

console.log()

//saber qual o index da string
console.log(umaString2.indexOf('texto'));
console.log(umaString2.indexOf('o', 3));

//comeca do final para tras, ou seja, de tras pra frente
console.log(umaString.lastIndexOf('m', 3));

console.log();

// EXPRESSOES REGULARES

/*
macth -> Corresponde a uma string com uma expressão regular e 
retorna uma matriz contendo os resultados dessa pesquisa.

search -> Encontra a primeira correspondência de substring em
uma pesquisa de expressão regular

replace -> Substitui o texto em uma string, usando uma expressão
regular ou string de pesquisa.

slice -> Retorna uma seção de uma string, ela corta uma string em
determinada posicao


*/ 
console.log(umaString2.match(/[a-z]/g));

console.log(umaString2.search(/x/));

console.log(umaString2.replace('Um', 'Outro'));
console.log(umaString2.replace(/Outro/, /Um/));

let textoString = "Um rato roeu a roupa do rei de roma";

console.log(umaString2.replace(/r/g, '#'));// g --> ele vai trocar todos por jogo da velha
console.log(umaString2.length);// tamanho da string

console.log(umaString2.slice(2, 6));

//console.log(umaString2.length - 3);
console.log(umaString2.slice(-5)); // pega de tras para frente
// subtraiu a string inteira

console.log(umaString2.slice(-5, -1));

console.log(textoString.slice(umaString.length - 5));

console.log(textoString.split(' '));// converte para array

console.log(textoString.toUpperCase());// letras maisculas
console.log(textoString.toLowerCase());// letras minusculas