class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const renato = new Cliente("Renato", "renato@renato.com", "32654128942", 185)

renato.exibirSaldo()
console.log(renato)