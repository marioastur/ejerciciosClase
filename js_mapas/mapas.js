// Creamos un mapa de datos

// Damos valores en tiempo de diseño
let telefonos = new Map([
    ['Juan', '6363636363'],
    ['Ana', '777222999'],
    ['Luis', '888222918'],
    ['Jose', { phone: 88833333, city: 'Oviedo' }]
])

// Podemos añadir valores en tiempo de ejecución
telefonos.set('Lucia', { phone: '182738495', city: 'Gijón' })

//Leemos valores
//console.log(telefonos.get('Jose').city)






var sortSentence = function(s) {

    const textArray = s.split(' ')
    const textSort = textArray.sort((a, b) => a.slice(-1) - b.slice(-1))
        // const textSort = textArray.sort((a, b) => a.charAt(a.length - 1) - b.charAt(b.length - 1))
    const finalWords = textSort.map(x => { return x.slice(0, -1) })
    const finalString = finalWords.join(' ')
    return finalString

    // Una linea

    //return s.split(' ').sort((a, b) => a.slice(-1) - b.slice(-1)).map(x => { return x.slice(0, -1) }).join(' ')
};
s = "Myself2 Me1 I4 and3"
console.log(sortSentence(s))
