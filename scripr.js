class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Estrutura de decisão
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando heróis (objetos)
let herois = [
    new Heroi("Arthas", 30, "guerreiro"),
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Ryu", 28, "monge"),
    new Heroi("Hanzo", 35, "ninja")
];

// Laço de repetição
for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}
