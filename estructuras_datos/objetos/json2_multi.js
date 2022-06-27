// JSON de varias dimensiones

var totalBeca = {
    dni:'32878065W',
    nombre:'Benito Lopera',
    diasBeca:[7,23,20,21,22],
    importe:2.45
};

// Calcular la beca de un mes

// recupero los dias lectivos

console.log('Dias lectivos : ' + totalBeca.diasBeca[2]);
console.log('Importe diario : ' + totalBeca.importe);
console.log('Importe total beca : ' + totalBeca.diasBeca[2]*totalBeca.importe + '€');

// con otra dimension


var alumnado = {
    '32878065W':{
        nombre:'Benito Lopera',
        diasBeca:[7,23,20,21,22],
        importe:2.45
    },
    '11076238J':{
        nombre:'Manolo Jumilla',
        diasBeca:[7,23,20,21,22],
        importe:3.05
    },
    '123456789J':{
        nombre:'Tato Pandero',
        diasBeca:[7,23,20,21,22],
        importe:1.35
    }
};

var mes = new Date();
mes = mes.getMonth();

var total=subtotal=0;

for (const key in alumnado) {
        var diasMes = Number(alumnado[key].diasBeca[mes]);
        var importeDia = Number(alumnado[key].importe);
        var importeMes = Number(diasMes*importeDia);
        console.log('El alumno ' + alumnado[key].nombre + ' cobra ' + importeMes );
        subtotal += importeMes;
    }
console.log('Importe total de becas pagadas: ' + subtotal);