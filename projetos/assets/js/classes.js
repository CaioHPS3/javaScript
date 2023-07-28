// A ideia e ter 4 personagem em que vão ter caracteristicas comum e proprias

class Character {

    _life = 1
    maxLife = 1
    attak = 0
    defense = 0

    constructor(name) {
        this.name = name
    }
    get life() {
        return this._life
    }

    // Vai fazer com que a vida do personagem não fique negativa
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Kinght extends Character {
    constructor(name) {
        super(name)
        this.attack = 10
        this.life = 100
        this.defense = 7
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.attack = 17
        this.life = 80
        this.defense = 4
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {
    constructor() {
        super("Little Monster")
        this.attack = 8
        this.life = 40
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor() {
        super("Big Monster")
        this.attack = 16
        this.life = 120
        this.defense = 7
        this.maxLife = this.life
    }
}

class Stage {
    //Pegando informações dos personagem, e a localização dele no html
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1EL = fighter1EL
        this.fighter2EL = fighter2EL
        this.log = logObject
    }

    start() {
        this.update()

        //Ataques jogador 1 e 2
        this.fighter1EL.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2EL.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    }

    // Função de atualizar a tela 
    update() {
        // Passando o nome do jogador1 para ser alterador na tela
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} -- ${this.fighter1.life.toFixed(2)}. HP`
        //Quando a porcentagem de vida
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        //passando a porcentagem de vida para a barra de vida
        this.fighter1EL.querySelector(".bar").style.width = `${f1Pct}%`;

        // Passando o nome do jogador2 para ser alterador na tela
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} -- ${this.fighter2.life.toFixed(2)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2EL.querySelector(".bar").style.width = `${f2Pct}%`;

    }

    doAttack(attacking, attacked) {
        if (attacked.life <= 0) {
            this.log.addMessage(attacked.name + "já morreu")
            return
        }
        if (attacking.life <= 0) {
            this.log.addMessage("Você ja morreu")
            return
        }
        /*
            A função Math.random() vai gerar um numero aleatorio entre 0 a 0,9999...
            multiplicando por 2 eu faço ele gera um numero aleatorio entre 0 e 2

        */
        let attackFactor = (Math.random() * 2).toFixed(2) // O ataque pode dobra e diminuir
        let defenseFactor = (Math.random() * 2).toFixed(2) // A defesa pode dobra e diminuir

        // Novos valores de dano e de defesa
        let actualAttack = (attacking.attack * attackFactor).toFixed(2)
        let actualDefense = (attacked.defense * defenseFactor).toFixed(2)

        if (actualAttack > actualDefense) {
            let dano = (actualAttack - actualDefense).toFixed(2)
            attacked.life -= dano
            this.log.addMessage(`${attacking.name} causou ${dano} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage(attacked.name + " conseguiu defender")
        }

        this.update()
    }
}

class Log {
    list = []

    constructor(listEl) {
        this.listEl = listEl
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML += "";
        
        for (let i in this.list) {

            let newli = document.createElement("li")
            newli.innerText = `${this.list[i]}`
            this.listEl.appendChild(newli)
            // this.listEl.innerHTML += `<li> ${this.list[i]}<li>`
        }
    }
}