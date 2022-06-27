function app() {
    const url = './js/data.json'
        //useFetchApi(url)
    useAwait(url)

}

app()


// Fetc recuperar los datos
function useFetchApi(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderTitlesInConsole(data.results)
        })
        .catch(error => {
            console.log('Error : ' + error)
        })
}

// imprimir en consola con FETCH
function renderTitlesInConsole(data) {
    data.forEach(object => {
        console.log(object.title)
    });
}

function renderTitleInDocument(data) {
    data.forEach(object => {

    })
}

// async and await
async function useAwait(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const jsonData = await response.json()
        renderTitlesInConsole(jsonData.results)
    } catch (error) {
        console.error(`Could not get products: ${error}`)
    }
}