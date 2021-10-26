function meuEscopo () {
    //Vai selecionar uma tag, classe ou por id no html
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //O evento é disparado quando o usuário envia um formulário
    /** 
    form.onsubmit = function (evento) {

        evento.preventDefault();//Nesse evento vc previni o que era para acontecer por padrão.
        alert(1);
        console.log("Foi enviado.")

    };*/

    function recebeEventoForm (evento) {

        evento.preventDefault();

        const nome = document.querySelector(".nome");
        const sobrenome = document.querySelector(".sobrenome");
        const peso = document.querySelector(".peso");
        const altura = document.querySelector(".altura");

        //console.log(nome.value, sobrenome, peso, altura);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
    
        });

        console.log(pessoas)
    
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
        /*
        pessoas[0] = {
                nome:  nome.value,
                sobrenome:  sobrenome.value,
                peso: peso.value,
                altura: altura.value,

        };

        console.log(pessoas[0].nome, pessoas[0].sobrenome, pessoas[0].peso, pessoas[0].altura)*/

    }


    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo();