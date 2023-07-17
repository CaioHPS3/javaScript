/*

    Expressões e Operadores

    Expressions
    Operators
        Binary 
        Unary
        Ternary 


*/

// Expressôes
let numero = 1
// Funçoes são expressões
function soma () {
    //Corpo
}

// Operadores binario
console.log(numero + 1)
//Unario
console.log(++numero)
console.log(typeof numero)

// New cria um novo objeto
let nome = new String("Caio")
let data = new Date("2022-12-30")

// "delete"  deleta uma propriedade dum objeto

const person = {
    name: "Caio",
    age: 22,
}

delete person.age
console.log(person)

// Operadores logicos
// 2 valors booleanos, quando verificados, resultam em verdadeiro ou falso

let pao = true
let queijo = true

// And && 
console.log(pao && queijo)
// Or ||
console.log(pao || queijo)
// NOT !
console.log(pao && !queijo)

// Condicional

// (Condição) "?"(então) (resultado) ":"(se não) (resultado)

const cafeBom = pão && queijo ? "Cafe foi bom" : "Cafe foi mais ou menos"

/*
    Operador de precedence
        Precedencia de operadores

    1 grouping                  ()
    2 negação e incrementos     ! ++ --
    3 Multiplicação e Divisão   * /
    4 Adição e subtração        + -
    5 Igualdade                 ==(Verifica só o valor) != ===(Verifica valor e tipo) !==
    6 And                       &&
    7 Or                        ||
    8 Condicional               ?:
    9 Assingnment (Atribuição)  = += -= *=

*/

/*
    Falsy
        Quando um valor e considerado false em contexto onde um booleano
        é obrigatorio (Condicionais e loops).

    false
    0
    -0
    ""
    null
    undefined
    NaN

    Truthy
        Quando um valor e considerado true em contexto onde um booleano
        é obrigatorio (Condicionais e loops).

    true
    []
    {}
    1
    5.16
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/




