
const url="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
let myMarvel = new Array
// Fetc recuperar los datos
const marvelApi = async() => {
    try{
        const response = await fetch(url)
        const marvelJson = await response.json() ;        
        marvelJson.map(element=>{
            if (element.biography.publisher == "Marvel Comics") {
                myMarvel.push(
                    {name:element.name,
                    powerstats:{
                    intelligence:element.powerstats.intelligence,
                    strength:element.powerstats.strength,
                    speed:element.powerstats.speed,
                    durability:element.powerstats.durability,
                    power:element.powerstats.power,
                    combat:element.powerstats.combat}
                        }
                    )
                }
        })
        console.log('DENTRO de la funcion')
        console.log(myMarvel[0].name) 
        console.log(myMarvel[0].powerstats.intelligence) 
    }
    catch(error){
        console.log('Error : ' + error)
    }
}

marvelApi()

console.log('FUERA de la funcion')
console.log(myMarvel)
console.log(myMarvel[0].name) 
console.log(myMarvel[0].powerstats.intelligence) 

