// Selecionando Elemnentos
/*
    Seleção por TAG, vai gera um array das tags do tipo passado

    Posso armazenar esse array em uma variavel, assim
    podendo acessar uma certa tag para fazer modificação pela
    posição dela no array. 

    let h1s = document.getElementsByTagName("h1")
*/
document.getElementsByTagName("h1")

// Seleção por ID, retornara somente aquele elemneto do ID
document.getElementById("caio")

// Seleção por class, retornara os elementos que esntão com aquela class
document.getElementsByClassName("botao")

//Seletor generico vc passa o parametros como se fosse no css
// ID
document.querySelector("#teste")
//class
document.querySelector(".botao")
// tag
document.querySelector("h1")
document.querySelectorAll("button")
/*
    Eventos e click

    Um dos metados e: No arquivo HTML em umas das tags 
    colocar um atributos "onclick" passando uma função que esteja no JS
*/
function clique() {
    //Manipulando Elementos
    /*Basicamente seleciona o elemento e faz alguma coisa com ele*/
    let teste = document.querySelector(`#teste1`)
    // ".children" lista(array) os filhos direto(Os filhos não pega os netos) daque elemento
    console.log(teste.children)

    // Pegando a tag ul de dentro do "ID teste" 
    let ul = teste.querySelector("ul")

    // O ".innerHTML" serve para CONSULTA o CONTEUDO da tag e também para MODIFICAR o CONTEUDO
    // (Rescrevendo a memoria, apagando o anterior e rescrevendo em cima)
    console.log(ul.innerHTML)

    // Modificando o CONTEUDO do ul apagando o que tinha antes na memoria e colocando um novo
    ul.innerHTML = "<li>Item novo</li>"

    //Add um novo li no ul (Ainda tem espaço ul por isso só modifcando o anterior) 
    //(faz uma copia do anterior e add o outro junto)
    ul.innerHTML += "<li>Item novo2</li>"

    //Adicionando um texto no final do segundo li
    ul.children[1].innerHTML += "(add)"

    // ".append" serve para ADICIONAR no item da tag selecionada(Não rescrevendo a memoria só add memoria) 
    // add texto
    ul.children[0].append("(alteração)")

    //Crindo uma tag li, tento agora um espaço na memoria
    let newli = document.createElement("li")

    // Abribuindo o conteudo ao li criado
    newli.innerText = "Item novo com memoria"

    //Adicionando a tag que foi criada no arquino hmtl
    // apped adiciona no final 
    ul.appendChild(newli)
    // prepend adiciona no começo
    ul.prepend(newli)

    // O "outerHTML" vai consultar e modificar "O TODO" incluindo a propria tag
    console.log(ul.outerHTML)

    /*
        Ate então so fizemos modificação dentro de uma tag selecionada (No Conteudo )
        ou na propria tag.

        Agora vamos fazer modificação no contexto da tag selecionada.

    */

    // Basicamente o after e o before vão adicionar antes ou depois da tag selecionada
    //add texto
    ul.after("Adiconando um texto depois do ul")
    ul.before("Adiconando um texto antes do ul")

    // Adicionando uma tag
    //Criando um botão 
    const newbutton = document.createElement("button")
    // Colocando um texto
    newbutton.innerHTML = "Novo Botão"
    //Colocando o botão depois do ul
    ul.after(newbutton)
}

//  executando o evento no proprio js fazendo a seleção o item e executando com o addEventListener
// let botao = document.getElementsByClassName("botao")
// botao.addEventListener("click", clique)

function clique2() {
    // Nessa segunda função vamos trabalha a manipulação de atributos

    const input = document.querySelector("input")
    console.log(input)

    // ".getAttribute" seleciona o atributo passado se ele estiver lá
    // Pegando o atributo type da tag input e imprimindo
    console.log(input.getAttribute("type"))

    // ".hasAttribute" vai fazer a verificar se o atrubuto passado existe na tag(Retorna um boolean)
    if (input.hasAttribute("placeholder")) {
        console.log("Exite sim um placeholder")
    } else {
        console.log("Não exite um placeholder")
    }

    //".setAttribute" vai adicionar ou modificar um atributo de uma tag
    // Sendo passado dois parametros o nome do atributo e a conteudo

    if (input.getAttribute("type") == "text") {
        input.setAttribute("type", "password")
    } else {
        input.setAttribute("type", "text")
    }
}

function  clique3(){
    // Trabalhando com classes

    const botao = document.querySelector(".botao")

    // ".classList" lista todas as classe que estiverem em uma tag
    // Permitindo a manipulação das classes
    console.log(botao.classList)

    //Adiciona classe nova
    botao.classList.add("verde1")
    //Remove classes
    botao.classList.remove("verde1")
    //  ".contains" verifica se existe ou não a classe passada
    console.log(botao.classList.contains("verde"))
    // ".toggle" vai fazer a retirada e inserção de uma classe já existente
    // Na função clique3 a acada vez que ele clicar vai retirar ou colocar a classe azul
    // OBS: Se vc passare com parametro uma classe que não pertence originalmente a tag
    // o toggle só vai add não vai remover  
    botao.classList.toggle("azul")
    // ".replace" vai fazer a substituição de uma clsse por outra, recebe dois parametros
    botao.classList.replace("verde", "vermelho")
}


