//IF e ELSE

let temperatura = 36.5

if(temperatura >= 38){
    console.log("To morrendo")
}else if(temperatura > 36.5 && temperatura <= 37.5 ){
    console.log("To mais ou menos")
}else {
    console.log("To de boa")
}

//Switch

let expression = "Gostoso"

switch(expression) {
    case "Gostoso":
        console.log("Caio")
        break
    case "Feio":
        console.log("Davi")
        break
    default:
        console.log("Nem uma das opções")
        break
}

// Tratamento de erro
//Throw  "Pega o erro"
//try "Tentar" ...catch "pegar"

/*
    Estruturas de Repetição

    for = para
    while = quanto
    for of = "para quanto" percorre quanto tiver variaveis no array
    for in = "para quanto" (para manipular objetos) perconrendo quanto tiver variaveis no objeto
*/

