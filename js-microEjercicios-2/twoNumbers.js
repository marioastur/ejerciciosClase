const compareButton = document.getElementById('button')
const result = document.getElementById('result')

compareButton.onclick = function(){
    let numberOne = document.getElementById('numberOne').value
    let numberTwo = document.getElementById('numberTwo').value

    if (numberOne > numberTwo ) {
        result.innerHTML = `El número mayor es : ${numberOne}`
        return
    }
    if (numberOne < numberTwo ) {
        result.innerHTML = `El número mayor es : ${numberTwo}`
        return
    }
    if (numberOne === numberTwo ) {
        result.innerHTML = `Los número son iguales.`
        return
    }
}