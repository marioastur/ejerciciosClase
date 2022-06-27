const compareButton = document.getElementById('button')
const result = document.getElementById('result')

compareButton.onclick = function(){

    let phrase = document.getElementById('phrase').value
    let number = 0

    for (let index = 0; index < phrase.length; index++) {
        if (phrase[index]==='a' || phrase[index]==='A') {
            number ++
        }        
    }
    result.innerHTML = `La frase "${phrase}" contiene ${number} letras "a"`
}