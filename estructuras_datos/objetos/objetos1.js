function movil(p,a,c,m,i) {
    // Propiedades o caracteristicas de la pseudoclase movil
    this.peso = p;
    this.autonomia = Number(a);
    this.color = c;
    this.marca = m;
    this.precio = i;
    // Funcion asignada 
    this.llamar = function (){
        alert('Llamado al 900121212 con el telefono marca' + this.marca);
    }
    this.masAuto = function () {
        // var plusAutonomia = Number(prompt('Añadimos baterias de 500?'));
        this.autonomia += 500;
    }
}

    
// Fin de la definicion pseudoclase movil

// Creamos objetos de tipo movil

var movil1 = new movil('82','120','rojo','Siemens',333);
console.log('Batería actual de tu movil ' + movil1.marca + ' es ' + movil1.autonomia);
movil1.masAuto();
console.log('Mas Batería en tu movil ' + movil1.marca + ' es ' + movil1.autonomia);

