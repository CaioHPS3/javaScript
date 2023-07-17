// Comentario em linha 

/*
Comentarios em blocos 
*/

console.log("Bem Vindo") // Imprime no console


/* 
Tipos de dados
String
    Caracteres que são colocados entre:

    " " == aspas
    '' == aspas simples
    `` == template literals ou template strings (Crase) 
        Tem um poder maior podendo ser multiLinha e colocar operações dentre sem da erro
        ao contrario das outras opções.  
 
*/
console.log("Bem vindo ")
console.log('Ao seu começo ao javascript')
console.log(`
Olha como pula linha e faz conta ${1+2}
`)

/*
Number
    Numeros

    Pode representar todos os tipos
        Inteiros 
        Reais
        Racionais e Iracionais
        (33, 3.3, 0.3333333)
    
    NaN -> representa um não numero 
    Infinity -> presenta o infinito

*/
console.log(`
    33
    0,333
    0,6329656966464
    5,2

`)
console.log(Infinity)
/*

undefined
    *indefinido
    *não existe

null
    *objeto que não possui nada dentro
    *nulo
    *diferente de undefined

*/

console.log(undefined === null)

/*

Objet
    *Objeto 
    *Propriedades / Atributos (caracteristca/ valores daquele objeto)
    *Funcionalidades / Métados  (pode ter funções dentro desse objeto)

    {propriedade : "valor"}


*/

{
    let person = {
        nome: "Caio",
        idade: 20, 
        andar: function() {
        console.log(andar)
    }
    }

    console.log(`Meu nome é ${person.nome} e tenho ${person.idade}`)
}

/*

Array (Vetores)
    *Uma  lista
    *Agrupamento de dados

    Aparentemente são declarados entre chaves

    ["Caio", 20, "Palmas"]

*/

{
    const animais = [
        "Leão",
        "Gato", 
        "cachorro",
        {
            name: "Baleia",
            peso: 8000
        } 

    ]

    //Acessando uma posição espesifica 
console.log(animais[1])

    // Acessando um objeto
console.log(animais[3].peso) 

}
/*

Variaveis 
    *Nomes simbolicos para receber algum valor
    *Atalho de codigo
    *Identificadores

    3 palavras reservada para criar uma variavel
        *var (Escopo global "pode ser ultilizada em todo codigo" e mutavel)
        *let   (Escopo em Bloco "Só pode ser ultilizada depois de declarada e na função que foi chamada" e mutavel )
        *const (Escopo em blocos e Imutavel)
*/

{   

    //Variaveis são vão funcionar dentro desse scopo
    let nome= "Caio"
    const idade = 22

    //Multiplas declarações
    let altura, peso
    altura = 1.70
    peso = 74
    const IMC = (altura*altura) * peso

    console.log("Qual o IMC ?" + IMC )

    // concatenação
    console.log("Qual o nome ? " + nome, "e a idade ? " + idade)

    // ou

    //interpolação 

    console.log(`Qual o nome ? ${nome} e a idade ? ${idade}`)


    // console.log(pergunta)
}

// var pergunta = "Tem nada aqui não só o var"
// console.log(pergunta)
// console.log("Qual o nome ?" + nome, "e a idade ?" + idade)

// Execicios
{

let weight //number 

let nome, ager, stars, isSubscribed

nome = caio
ager = 21
stars = 5.5
isSubscribed = true

console.log(typeof nome)

}