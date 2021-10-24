const cliente = {
    nome: "Renato",
    idade: 2021-1988,
    cpf: "56321579845",
    email: "renato@renato.com",
    fones: ["37915648789", "31966588663"],
    dependentes: [{
        nome:"Renata Soares",
        parentesco: "esposa",
        dataNasc: "12/12/1989"
    }]
}

cliente.dependentes.push({
    nome: "Luiza",
    parentesco: "filha",
    dataNasc: "05/10/2023"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="05/10/2023")

console.log(filhaMaisNova[0].nome)