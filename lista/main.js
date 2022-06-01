const listElements = document.getElementsByClassName('elements')
const arrayElement = Array.from(listElements)
const myButton = document.getElementById('do')

myButton.onclick = changeColor

function changeColor(){
    arrayElement.forEach(element => {
        element.style.color='red'
    })
}


