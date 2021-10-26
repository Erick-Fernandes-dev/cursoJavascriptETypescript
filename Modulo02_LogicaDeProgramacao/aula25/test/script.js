let usuario = (nome, gmail, senha) => {

    let user = []

    if ("Erick" || true) {

        user.push({

            nome: nome,
            gmail: gmail,
            senha: senha

        })

    }

    console.log(user.length)

    return user;

}

console.log(usuario("Erick", "123@gmail.com", "12345678"));