// aprendendo como declarar funções em javascritp 

//chamada da função
soma(1, 2)

// Declaretion - Declaração da função
//O nome function seguido do nome + parametros de entrada + chaves(o que a função vai fazer)
// fUNÇÕES NORMAIS SOFREM ELEVAÇÃO VC PODER FAZER A CHAMDA ANTES DA DECLARAÇÃO
function soma(a, b) {
    let soma = a + b
    console.log(`O resultado da soma é ${soma}`)
}



// Function expressison 
// Function anonymous 
// Declaração anonima de uma função  por a sunção não ter nome 
// ela ser uma variavel
// Funções anonimas não sofrem elevação(VOCE PRECISA DECLARA A FUNÇÃO ANTES DE 
// FAZER A CHMADA)

const subtra = function (a, b) {
    let total = a - b
    return total
}

//chamada da função anonima 
subtra(10, 5)

// Se vc não passar os parametros da função o console vai imprimir toda a função
console.log(`O valor da subtração é ${subtra(10, 5)}`)

// Arrow Funcion 
// Declaração de uma função na qual vc não precisa usar o nome "function"
// So o "=>"
// Sendo uma função anonima não elavada
// Recomendados supre usar com o const
const divisao = (a, b) => {
    let total = a / b
    return total
}

console.log(divisao(10, 2))

/* 
    Function() constructor
    
    * expressão new
        * criar um novo objeto
        * this keyword 


*/

{
    function Person(name) {
        this.name = name
        this.walk = function () {
            return "andando"
        }
    }
    /*  A variavel caio vai ser um objeto, que está passando pela função contrutora
        "Person" o qual esta setando uma variavel name como Caio Henrique
        (Em sintese dentro do objeto pode ter N variais. 
        A expressão "this.AlgumaCoisa" vai servir "declarar valores" para as variaveis que estão dentro
        do objeto no EX: name e walk).
        OBS: Os parametros recebidos da função pode ser usado para atribuir valores nas variaveis do objeto

    */

    // Criação dos objetos com o "new"
    const caio = new Person("Caio Henrique")
    const davi = new Person("Davi Pinho Santos")

    //Impressão do objeto
    console.log(caio.name)
    console.log(davi.walk(), davi.name)
}