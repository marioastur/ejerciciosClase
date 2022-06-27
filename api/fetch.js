//Usando promesas normales y asíncronas con asinc
//FETCH 
fetch('https://pokeapi.co/api/v2/pokemon/ ')// con fetch podemos usar una API copiendo su url (hemos iniciado la promesa)
.then(res => res.json())//nos ha llegado la promesa y guardamos el resultado y lo cambiamos a .json
.then(data =>{//guarda los datos de la funcion anterior
    // console.log(data.results) // nos muestra el array de los pokemon
    data.results.forEach (element => {//recorre el array elemento a elemento 
        console.log(element.name)//nos muestra los elementos por el parametro nombre
    });
})
.catch(error => console.log(error))//en caso de error toma la acción que le venga dada en la API
​
//ASINC  AWAIT
const obtenerPokemones = async() => {//creamos la funcion de flecha  y asinc debe ir antes de la funcion
    try {//intenta hacer esto y en caso contrario devuelveme lo que hay en catch(que se hace en caso de error)
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ ')//esperemos que nos traiga este fetch y lo gurdamos en una constante llamada respuesta
        const data = await respuesta.json()// data va a esperar los resultados de la const respuesta y transformarlos en .json
        console.log(data.results)// nos muestra los resultados almacenados en data
    } catch (error) {
        console.log(error)
    }
}
obtenerPokemones()//llamamos a la funcionconst 
Contraer