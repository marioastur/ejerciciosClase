let arrayNumbers = [14, 3, 1]

function orderArray(myArray) {
    if (!Array.isArray(myArray)) {
        throw TypeError('No es un array')
    }
    if (myArray.length <= 1) {
        return myArray
    }
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index]
        let result = []

        if (myArray[index] > myArray[index + 1]) {
            []
        }

    }

}






console.log(orderArray(arrayNumbers))