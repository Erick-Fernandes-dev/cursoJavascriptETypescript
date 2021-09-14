const pessoas = [
    {
        "nome": "Erick",
        "idade": 21
    }
];

console.log(pessoas[0].nome);

//CRIAR UM ARRAY COM UM TIPO DE DADO


//               0       1        2    
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo';//vai substituir/alterar Luiz por Eduardo
alunos[3] = 'Luiza';// vai adcionar o nome Luiza do indice 3

console.log(alunos.length)// tamanho do array

// alunos[alunos.length] = "Fernando";//adciona no fim
// alunos[alunos.length] = "Luana";
// alunos[alunos.length] = "Fábio";

console.log(alunos);

alunos.push("Otávio");//vai adcionar no final do array
alunos.push("Maria");

alunos.unshift("Eduarda");//vai adcionar no início do array

console.log("================================================================================================================")

const removido = alunos.pop();//removendo no final
console.log(removido)

const removido2 = alunos.shift();//removendo no início
console.log(removido2);

console.log("================================================================================================================")

delete alunos[1];
console.log(alunos)

console.log("================================================================================================================")

console.log(alunos[50])//undefined

console.log("================================================================================================================")

console.log(alunos.slice(0, -1));

console.log(typeof alunos);// tipo de alunos

console.log(alunos instanceof Array);// perguntando se é uma instancia de array












