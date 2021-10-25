function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const renato = new cliente("Renato", "12345678988", "renato@renato.com", 100)

console.log(renato)