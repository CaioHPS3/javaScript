class Pessoa{
    // As variaveis dentro das classes não precisam do seu tipo(var, let ou const)

    idade = 0
    pasos = 0

    //Função construtora, primeira que é iniciada quando vc atribui o tipo da classe
    constructor(nome){
        // this vai referenciar ao objeto do tipo da classe (Objeto do tipo pessoa)
        this.name = nome
    }

    /*
        Action
        Ações que aquele objeto pode fazer
    */

    andando(){
        this.pasos ++
    }

}
/*
    Instanciando (Instancia) 
    "pessoa1" é um objeto do tipo Pessoa assim tendo todas as carteristicas de uma Pessoa
    "new" é responsavel por fazer essa atribuição de tipo
*/

let pessoa1 = new Pessoa("Maria")

console.log(pessoa1.name)

pessoa1.andando()
pessoa1.andando()

console.log(pessoa1.name + " deu " + pessoa1.pasos + " passos" )