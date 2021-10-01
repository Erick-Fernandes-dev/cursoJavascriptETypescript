/**
 * Operadores Lógicos
 * 
 * && -> AND -> E -> todas as expressẽs precisam ser verdadeiras para retorna true
 * || -> OR -> OU -> Só precisa uma ser true para as outras serem true
 * ! -> NOT -> NÃO -> inverte
 * 
 */

//const expressaoAnd = true && true && true && true;
//const expressaoOr = false || false || false || true;

const usuario = "Erick";
const senha = "123456";
//                       true                 false
const vaiLogar = usuario === "Erick" && senha === "12345";
console.log(vaiLogar);

console.log(!vaiLogar)

