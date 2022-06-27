const compareButton = document.getElementById('button')
const result = document.getElementById('result')

compareButton.onclick = function(){
    let numberOne = document.getElementById('numberOne').value
    let textResult = `El número ${numberOne} `
    if (numberOne%2===0) {
        textResult += 'es divisible de 2'
    }else{
        textResult += 'no es divisible de 2'
    }
    result.innerHTML = textResult
}