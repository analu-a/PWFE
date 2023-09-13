'use strict'

const informacao = document.getElementById('espacoInformacao')
const inputCep = document.getElementById('digitarCep')

async function pegarDados(){

    const url = 'https://viacep.com.br/ws//json/'

    if (inputCep != ''){
        url = `https://viacep.com.br/ws/${inputCep}/json/`
    }
    const response = await fetch(url)
    const cep = await response.json()

    return cep
}




informacao.addEvenListener('blur', pegarDados)
pegarDados()