const compareButton = document.getElementById('button')
const result = document.getElementById('result')

compareButton.onclick = function(){
    let numberOne = document.getElementById('numberOne').value
    let numberTwo = document.getElementById('numberTwo').value
    let numberThree = document.getElementById('numberThree').value
    let number = Math.max(parseInt(numberOne),parseInt(numberTwo),parseInt(numberThree))
    result.innerHTML = `El número mayor es : ${number}`
}