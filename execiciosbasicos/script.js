// Pergunta o nome e imprimir na tela

// let name= prompt("Qual o seu nome ?")

// alert(`Ola ${name} vamos fazer a soma de dois numeros`)

// let numberOne = prompt("Qual o primeiro numero ?")
// let numberTwo = prompt("Qual o segundo numero ?")

// const resposta = Number(numberOne) + Number(numberOne)

// alert("A soma é " + resposta)

// Agora vamos brincar com nome de alunos e com notas

function Aluno (name, n1, n2, n3) {

    this.nome = name
    this.nota1 = n1
    this.nota2 = n2
    this.nota3 = n3

    const media = function(n1, n2, n3) {
        let mediaNota = (n1+n2+n3)/3
        return mediaNota
    }

}

let res = 'não'

while(res != "sim"){
    const Alunos = [];
    alert("Preencha os dados")
    
    let nome = prompt("Qual o nome do aluno ?")
    let nota1 = prompt("Qual a nota 1 do aluno " + nome)
    let nota2 = prompt("Qual o nota 2 do aluno " + nome)
    let nota3 = prompt("Qual o nota 3 do aluno " + nome)

    let  x = 0

    x = new Aluno(nome, nota1, nota2, nota3)
    Alunos.push(x)

    res = prompt("Deseja encerrar ?")
}