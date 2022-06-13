console.log("Ejemplo de forEach")
let myStones = "Mario"
let stoneArray = myStones.split("")

stoneArray.forEach(element => {
    console.log(element)
});


console.log("### Ejemplo de map ###")

let myNumbers = [10, 20, 30]

let doubleElements = myNumbers.map(function(number) {
    return number * 2
})

/*
// Otra opción
function double(x){
    return x*2
}
let doubleElements = myNumbers.map(double)
*/

console.log(doubleElements)

//#################### Ejemplos de Filter ####################

console.log("### Ejemplo de filter ###")

const listNumbers = [2, 3, 6, 8, 13, 15, 20, 252]

// Tres formas de llamar al método filter
let evenNumbers = listNumbers.filter(x => x % 2 == 0)

let evenNumbers_2 = listNumbers.filter(x => {
    return x % 2 == 0
})

let evenNumbers_3 = listNumbers.filter(function(x) {
    return x % 2 == 0
})


console.log(evenNumbers)
console.log(evenNumbers_2)
console.log(evenNumbers_3)

//#################### Ejemplos de reduce ####################

const words = ['uno', 'de', 'estos', 'dias']
let initialValue = 'Frase: '

let frase = words.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue, initialValue)
console.log(frase)
console.log(typeof(frase))