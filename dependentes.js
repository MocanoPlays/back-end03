const clientes = [
    {
    nome: "Renato",
    idade: 2021-1988,
    cpf: "56321579845",
    email: "renato@renato.com",
    fones: ["37915648789", "31966588663"],
    dependentes: [{
        nome:"Renata Soares",
        parentesco: "esposa",
        dataNasc: "12/12/1989" },
        {
        nome: "Luiza",
        parentesco: "filha",
        dataNasc: "05/10/2023"
        }],   
    },
    {
        nome: "Juliana",
        cpf: "98654231548",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)