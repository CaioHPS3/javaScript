let log = new Log(document.querySelector(".log"))
let char = new Sorcerer("Caio")
let monster = new LittleMonster()

// Criando senario do jogo e passando os jogadores 
const stager = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
)
fetch("shasjkdhakdh", {
    
})
//Iniciando o jogo
stager.start()