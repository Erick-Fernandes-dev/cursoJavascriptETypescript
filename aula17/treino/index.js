const listaDeObjetos = [
    {
        nome: "Erick",
        profissao: "Programador",
        endereco: "GBA"
    },

    {
        nome: "Maria",
        profissao: "Engenheira",
        endereco: "Santa Luzia"

    }
]


console.log(listaDeObjetos[0].nome)

for (let i = 0; i < listaDeObjetos.length; i++) {
    
    if (listaDeObjetos[i].nome == "Erick") {
        console.log(`Seja bem vindo ${listaDeObjetos[i].nome}`)
    } 
    
}
