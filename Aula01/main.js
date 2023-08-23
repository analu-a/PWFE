'use strict'

// 3 - var -> Mutável  -> Global (vale em todo lugar)
// 2 - let -> Mutável -> Bloco
// 1 - const -> Imutável -> Bloco

// document.getElementById -> É para procurar o elemento que eu desejo movimentar, para trazer ele do html

// prompt -> Serve para criar um campo para o usuário digitar (coletar informação)

// titulo.textContent -> Serve para poder modificar o objeto sem ter que ir mudar a tag

// addEventListener -> É para ele captar algum evento como por exemplo um click (capturar um evento)
// ('click',trocarTitulo) -> o click serve para dizer qual ação vai despertar a ação e o depois da virgula é o que ele vai fazer após o click

function trocarTitulo (){
const tituloPagina = document.getElementById('titulo')

let tituloDigitado = prompt('Digite um título')

if(tituloDigitado == ''){
    tituloDigitado = 'Ana '
}

titulo.textContent = tituloDigitado
}

const botaoTrocarTitulo = document.getElementById('trocar-titulo')

botaoTrocarTitulo.addEventListener('click',trocarTitulo)

// ----------------------------------------------------------------

function cadastrar (){
    const nome = document.getElementById('nome')
    let digitarNome = prompt('digite seu nome')
    nome.textContent = `NOME:  ${digitarNome}`

    const idade = document.getElementById('idade')
    let digitarIdade = prompt('digite sua idade')
    idade.textContent = `IDADE: ${digitarIdade}`

    const cidade = document.getElementById('cidade')
    let digitarCidade = prompt('digite sua cidade')
    cidade.textContent = `IDADE: ${digitarCidade}`

    const media = document.getElementById('media')
    let digitarMedia = prompt('digite sua média')
    media.textContent = `MÉDIA: ${digitarMedia}`
    
    if(digitarMedia>5){
        media.classList.add('azul')
    } else if(digitarMedia<5){
        media.classList.add('vermelho')
    }
    


}

const botaoCadastro = document.getElementById('botao-cadastro')
botaoCadastro.addEventListener('click', cadastrar)