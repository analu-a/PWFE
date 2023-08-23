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

//Mostrar números pares

const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')

function mostrarNumerosPares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
   const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}



botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)

//Mostrar números impares

const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')

function mostrarNumerosImpares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
   const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

// Mostrar multiplos de 3

botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)


const botaoMostrarMultiplosTres = document.getElementById('botao-mostrar-multiplos-tres')

function mostrarMultiplosTres () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-tres')

    container.replaceChildren('')
   const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}



botaoMostrarMultiplosTres.addEventListener('click', mostrarMultiplosTres)

//Mostrar multiplos de 3 e 4

const botaoMostrarMultiplosTresQuatro = document.getElementById('botao-mostrar-multiplos-tres-quatro')

function mostrarMultiplosTresQuatro () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-tres-quatro')


    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){
        if( numeros[indice] % 3 == 0 && numeros[indice] %  4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}

botaoMostrarMultiplosTresQuatro.addEventListener('click', mostrarMultiplosTresQuatro)


//Mostrar multiplos de 3 ou 4

const botaoMostrarMultiplosTresOuQuatro = document.getElementById('botao-mostrar-multiplos-tres-ou-quatro')

function mostrarMultiplosTresOuQuatro () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-tres-ou-quatro')


    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){
        if( numeros[indice] % 3 == 0 || numeros[indice] %  4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}

botaoMostrarMultiplosTresOuQuatro.addEventListener('click', mostrarMultiplosTresOuQuatro)

//Mostrar proximo

const botaoMostrarProximo = document.getElementById('botao-mostrar-proximo')

function mostrarProximo () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo')


    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){
        if( numeros[indice] ++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}

botaoMostrarProximo.addEventListener('click', mostrarProximo)



//Mostrar proximo par

const botaoMostrarproximoPar = document.getElementById('botao-mostrar-proximo-par')

function mostrarProximoPar () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-par')


    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){

        if( numeros[indice]  % 2 == 0 ){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) +2
            container.appendChild(novoSpan)
        
        } else if( numeros[indice] %2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number (numeros[indice])+1
            container.appendChild(novoSpan)
        }
    }

}

botaoMostrarproximoPar.addEventListener('click', mostrarProximoPar)

//Mostrar o dobro

const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')

function mostrarDobro () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')


    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for( let indice= 0; indice < ultimoIndice; indice++){

       
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) * 2
            container.appendChild(novoSpan)
        
       
    }

}

botaoMostrarDobro.addEventListener('click', mostrarDobro)