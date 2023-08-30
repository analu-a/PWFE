'use strict'

//Pegar livro Código limpo
//Toda função tem que te responsabilidade única (ter uma função só)
// const limite = funcionarios.length
// for (let i=0; i<limite; i++){
//     console.log (`ID: ${i} -- ${funcionarios[i].nome}`)

// }


// funcionarios.forEach(funcionario => console.log(funcionario.cargo))

// const mostrarNomes = (funcionario => console.log (funcionario.nome))
// funcionarios.forEach(mostrarNomes)

    // card.appendChild(imagem)
    // card.appendChild(name)
    // card.appendChild(cargo)


const funcionarios = [
    {
        nome: "Maria Souza",
        cargo: "Design",
        imagem: "maria.jpg"
    },
    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg" 
    },
    {
        nome: "Hugo Pereira",
        cargo: "FrontEnd",
        imagem: "hugo.jpg"
    },
    {
        nome: "Ana Maria",
        cargo: "BackEnd",
        imagem: "ana.jpg"
    }
]




const criarCard = (funcionario) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.name

    const name = document.createElement('h2')
    name.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    card.replaceChildren(imagem, name, cargo)
    

    return card
}

const mostrarCards = (funcionario) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionario)
    cardContainer.appendChild(card)
}
funcionarios.forEach(mostrarCards)

