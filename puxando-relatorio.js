const cliente = {
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
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

let relatorio = "";
for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else {
    relatorio += `
    ${info} ==> ${cliente[info]}
    `
}
}

console.log(relatorio)