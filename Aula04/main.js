'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('todos-numeros-container')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for(let indice=0; indice < ultimoIndice; indice++){
        const novoSpan =document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)

    }
}


botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)