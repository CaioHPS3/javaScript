//https://jsonplaceholder.typicode.com/posts

function clicou(){
    /*

        Promise

        Função "fetch" serve para fazer requisição
        ".then" e uma função que vai dizer o que vai acontecer depois que certa função for feita
        ".catch" e uma função que vai fazer o tratamento de erro da requisição só aparecendo se
            der algum erro
        ".finally" e uma função que vai ser executada independente se tenha dado certo ou errado 
            podendo ser deixado uma mensagem no final ou uma função que deve ororrer no final da operação  

        Esta fazendo a requisição passando a URL e depois vai para uma função que vai
        converter a respotas "response" em objeto de fato com a função "json"
        depois vou poder aceita as informações que nem um objeto "data"
        isso de maneira asintrona(se tiver alguma função depois do requisição ela 
        não vai espera a requisição terminar)

        Funções mais usadas das requisições

        GET(PEGAR), POST(POSTAR), PUT(MODIFICA), DELETE(DELETAR)
    */

    //Por padrão o fetch é get 
    fetch("https://jsonplaceholder.typicode.com/posts").then(
        (response) => {
            return response.json()
        }
    ).then(
        (data) => {
            console.log(data[0].title)
        }
    ).catch(
        (erro) => {
            console.log("Deu merda")
            //reendo um parametro posso detalha o erro 
            console.log(erro)
        }
    ).finally(
        () => {
            alert("Terminou")
        }
    )
}

function inserir(){
    // Segundo parametro e um objeto com varias informações
    fetch("https://jsonplaceholder.typicode.com/posts", {
        //O metado que vc utilizar de inserir uma informação
        method: "POST",
        // O cabeçario passando o tipo do conteudo que vou mandar, no caso no tipo json
        headers: {
            'Content-Type': 'application/json'
        },
        //body vai mandar o conteudo, JSON.stringinfy vai tranforma o ]
        //obejto que eu passar em um tipo Json
        body: JSON.stringify({
            title: "Titulo de teste",
            body: "Corpo de teste",
            userId: 2 
        })
    }).then(
        (response) => {
            return response.json()
        }
    ).then(
        (json) => {
            console.log(json)
        }
    )
}

/*
    async/await basicamente vai deixar o Promise sintrono e deixando
    o codigo mais simplificado em relação ao Promise asincrono

    Async vai dizer que aquela função vai usar os recursos async
    O await vai forçar a espera de um resultado de um função para depois outra ser
    executada
*/ 
async function clicou2(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json();
    console.log(json[0].title)
}

async function inserir2(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "Titulo de teste",
            body: "Corpo de teste",
            userId: 2 
        })
    })
    let json = await response.json()
    console.log(json)
}

document.querySelector(".botao").addEventListener("click", clicou2)
document.querySelector("#inserir").addEventListener("click", inserir2)