let numbers = [1, 53, 'prueba', 2.3, 12, 'hola', 1, -2];


function sortNumbers(arrayOfNumbers) {

    // Eliminamos strings dentro del array
    arrayOfNumbers.forEach(element => {
        if (typeof(element) === 'string') {
            arrayOfNumbers.splice(arrayOfNumbers.indexOf(element), 1)
        }
    })

    // Retornamos un error si no pasan un array
    if (!Array.isArray(arrayOfNumbers)) {
        throw TypeError('No es un array')
    }

    // Si el array no continee elementos o contine un solo elemento retornamos el mismo array
    if (arrayOfNumbers.length <= 1) {
        return arrayOfNumbers
    }

    // Ordenamos el array comparando entre pares de elementos consecutivos
    let contador = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        for (let j = 0; j < arrayOfNumbers.length - 1; j++) {
            contador += 1
            if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
                [arrayOfNumbers[j], arrayOfNumbers[j + 1]] = [arrayOfNumbers[j + 1], arrayOfNumbers[j]]
            }
        }
    }
    console.log(contador)
    return arrayOfNumbers;
}
console.log(sortNumbers(numbers));