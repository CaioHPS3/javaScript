//https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postsArea = document.querySelector(".posts")
    postsArea.innerHTML = 'Carregando...'

    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json()

    if (json.length > 0) {
        postsArea.innerHTML = ''
        for (let i in json) {
            let newpost = document.createElement(`div`)
            newpost.innerHTML = `<h1>${json[i].title}</h1>${json[i].body}<hr/>`
            postsArea.appendChild(newpost)
        }

    } else {
        postsArea.innerHTML = "Nem um Posts para exibir"
    }
}

async function addPost(title, body) {

    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
    })

    document.querySelector('#titleField').value = ''
    document.querySelector("#bodyField").value = ''

    readPosts()
}

document.querySelector("#inserirField").addEventListener("click", () => {
    
    let title = document.querySelector('#titleField').value
    let body = document.querySelector("#bodyField").value

    if (title && body) {
        addPost(title, body)
    } else {
        alert('Preencha todos os campos')
    }
});

readPosts()
