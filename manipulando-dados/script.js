/*
    Prototype

    *prototype_based language
    *prototype chain
    *__proto__

    Basicamente o javascript e baseado em uma cadeia de prototipos
    Varias função ja feitas que vc pode so chama
    só usando o ponto

*/

// Manipulando Strings e Numbers

let string = "200"
let numero = 300
//Imprimindo o tipo
console.log(typeof string, typeof numero)
console.log(string, numero)

//Convertando os tipos para outro
Number(string)
String(numero)

//Imprimindo o tipo atualizado
console.log(typeof string, typeof numero)
console.log(string, numero)

//Impressão da conversão 
console.log(Number(string))
console.log(String(numero))

//Contador de numero de caraceres e digitos ".length"

let palavra = "Eu sou uma palvra grande"
console.log(palavra.length)

// Para conta o caracteres de um numero só tranaforma em uma string e depois ver o tamanho
let numeroGrande = 12345678
console.log(String(numeroGrande).length)

// Fixar as quantidade de casas decimais com o ".ToFixed(Numero que vc quer)"
// Trocar um caracter por outro com ".replace("caracter-a-ser-substituido", "caracter-a-substituir")"

let numeroQuebrado = 452.6666665645546
console.log(numeroQuebrado.toFixed(3))

// Manipulando Arrays

let techs = ["Html", "CSS", "JavaScript"]

// Add um item no final
techs.push("Node.js")
// Add no inicio 
techs.unshift("SQL")
// Remover no final
techs.pop
// remover no inicio 
techs.shift
// Pegar somente alguns elementos do array
// ".slice" vc passa dois parametros sendo de onde vc quer começar ate onde quer terminar
console.log(techs.slice(0, 2))
//Remover 1 ou mais itens em qualquer posição do array
console.log(techs.splice(0, 1))
// Encontrar a posição de um elemento no array
let index = techs.indexOf("CSS")
console.log(index)