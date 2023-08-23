'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function trocarCor () {
    forma1.classList.toggle('amarelo')
}

function trocarForma(){
    forma2.classList.toggle('circulo')
}

function rodar(){
    forma3.classList.toggle('rodar')
}

function meioCima(){
    forma4.classList.toggle('meioCima')
}

function estrela(){
    forma5.classList.toggle('estrela')
}

function lado(){
    forma6.classList.toggle('lado')
}

function sumir(){
    forma7.classList.toggle('sumir')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', rodar)
forma4.addEventListener('click', meioCima)
forma5.addEventListener('click', estrela)
forma6.addEventListener('click', lado)
forma7.addEventListener('click', sumir)