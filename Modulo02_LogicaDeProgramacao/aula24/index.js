/**
 * AVALIAÇÃO DE CURTO-CIRCUITO(SHORT-CIRCUIT)
 * 
 * 
 * && -> false && true = false "O valor mesmo"
 * // -> true || false -> vai retornar "O valor verdadeiro"
 * 
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 * 
 

console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Erick Fernandes' && true && 'José');// retorna o valor da ultima

console.log('Luiz' && '' && 'Maria');
console.log('Erick' && undefined && 'João');

*/

 function falaOi() {
     return 'Oi';

 }

const vaiExecutar = "Joãozinho";

console.log(vaiExecutar && falaOi())

console.log(0 || false || null || 'Erick Fernandes' || true);
console.log("José" || false || "" || true);

const corUsuario = "Vermelho";
const corPadrao = corUsuario || "preto";// vai retorna o primeiro valor true

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);// vai retorna o primeiro valor true
//caso contrário, retornará o último valor false.



