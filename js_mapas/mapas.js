// Creamos un mapa de datos

// Damos valores en tiempo de diseño
let telefonos = new Map([
    ['Juan','6363636363'],
    ['Ana','777222999'],
    ['Luis','888222918'],
    ['Jose',{phone:88833333,city:'Oviedo'}]
])

// Podemos añadir valores en tiempo de ejecución
telefonos.set('Lucia',{phone:'182738495',city:'Gijón'})

//Leemos valores
//console.log(telefonos.get('Jose').city)










var sortSentence = function(s) {
    let text=s.split(' ')
    console.log(text)

    text = text.map(function(word){
        console(length.text)
    })
    text = text.sort()
        console.log(text)
    



  

    let frase = text.map(x=>{return x.slice(0,-1)})
    
    console.log(frase.join(' '))
};
s = "Myself2 Me1 I4 and3"
sortSentence(s)