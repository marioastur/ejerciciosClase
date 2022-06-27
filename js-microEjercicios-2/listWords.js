const compareButton = document.getElementById('button')
const result = document.getElementById('result')

compareButton.onclick = function(){
    let phrase = document.getElementById('phrase').value
    let number = phrase.match(/[aeiouAEIOU]/g).length
    result.innerHTML = `La frase "${phrase}" contiene ${number} vocales`
}