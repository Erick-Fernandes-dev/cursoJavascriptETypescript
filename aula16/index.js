let num = prompt("Digite um número: ");
const isNum = parseInt(num);
const ehNan = Number.isNaN(num);
const duasCasas = parseFloat(num)


document.body.innerHTML += `<strong>Seu número é ${num}</strong><br/>`
document.body.innerHTML += `Raiz quadrada: ${num ** (1/2)}<br/>`
document.body.innerHTML += `${num} e um inteiro: ${Number.isInteger(isNum)}<br/>`
document.body.innerHTML += `E NaN: ${ehNan}<br/>`;
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br/>`
document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num)}<br/>`

document.body.innerHTML += `Com duas casas decimais: ${duasCasas.toFixed(2)}`