// Vamos a crear un array de asistencia semanal

var Benito = new Array(300,340,280,360,60);

var Manolo = [300,340,280,null,60];

Manolo[3] = 299;


//  Array asociativo

var Tato = new Array();
Tato['lunes']=330;
Tato.marter=250;
Tato['miercoles']=330;
Tato['jueves']=330;
Tato['viernes']=330;

// JSON
var Tino = {lunes:330, martes:254, miercoles:234, jueves:120, viernes:33};

for (const key in Tino) {
    if (Object.hasOwnProperty.call(Tino, key)) {
        console.log(key + ' => ' + Tino[key]);
    }
}

var Mario ={lunes:330, martes:{'mañamas':5,'tardes':6}, miercoles:234, jueves:120, viernes:33}

for (const key in Mario) {
    if (Object.hasOwnProperty.call(Mario, key)) {
        console.log(key + ' => ' + Mario[key]);
    }
}