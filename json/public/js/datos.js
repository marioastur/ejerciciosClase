/*
const table = document.querySelector('table')
table.innerHTML += `<tr>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Suite</th>
            </tr>`
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            table.innerHTML += `<tr>
            <td> ${element.name}</td>
            <td> ${element.address.city}</td>
            <td> ${element.address.suite}</td>
            </tr>`
            console.log(
                `Nombre : ${element.name} - Ciudad : ${element.address.city}`)
        });
    })
*/

const search = document.getElementById('searchButton')
const url = 'https://jsonplaceholder.typicode.com/users'
let dataApi = []
search.onclick = function() {
    const testToSearch = document.getElementById('inputText').value
    searchIdUsers(testToSearch)
}

function searchIdUsers(testToSearch) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dataApi = data
            console.log(dataApi)
        })
        .catch(error => {
            console.log('Error : ' + error)
        })
}