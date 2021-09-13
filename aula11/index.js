//alert, confirm e prompt (Navegador)

alert("Olá seja bem vindo");

let nome = prompt("Digite seu nome: ");

let confirmaSeVaiEntrarNaFesta = confirm("Voce tem 18 anos ?");

if (confirmaSeVaiEntrarNaFesta == true) {
    alert(`Seja bem vindo ao clube ${nome}`);
} else {
    alert("Por favor, volte quando completar 18 anos.");
}
