// Ejercicio 1
let textInfo = 'Hello World'
document.getElementById('result').innerHTML = textInfo

// Ejercicio 2
let sumResult = 3+5
document.getElementById('sum').innerHTML = sumResult

// Ejercicio 3
const button = document.getElementById('sendButton')
button.onclick = function(){
    const userName = document.getElementById('userName').value
    document.getElementById('helloUser').innerHTML = `Hola ${userName}`    
}

// Ejercicio 4
const sumProgram = document.getElementById('sumProgram')

sumProgram.onclick = function(){
    const firstNumber = prompt('Escribe el primer número... ')
    const secondNumber = prompt('Escribe el segundo número ...')
    const result = parseInt(firstNumber) + parseInt(secondNumber)
    document.getElementById('sumResult').innerHTML = `La suma de ${firstNumber} mas ${secondNumber} es igual a ${result}`
}

