
var factura = {
    empresa:{
        nombre:'Manolo y Benito',
        direccion:'Plaza tal y Cual, s/n',
        telefono: '985787878',
        nif:'B45128956'
    },
    cliente:{
        nombre:'Mario Rubio',
        direccion:'Avenida del Mar',
        telefono:'607222222',
        nif:'12345678J'
    },
    producto:[
        {descripcion:'Tornillos',cantidad:22,importe:12.51},
        {descripcion:'Arandelas',cantidad:14,importe:2.33},
        {descripcion:'Tuercas',cantidad:43,importe:2.51},
        {descripcion:'Destornillador',cantidad:1,importe:5.51},
        {descripcion:'Martillo',cantidad:2,importe:8.51},
        {descripcion:'Pintura',cantidad:5,importe:6.51}
    ],
    importeTotal:null,
    formaPago:'Efectivo'
};

// Ejemplos de acceso al contenido

console.log(factura['cliente']['nombre']);
console.log(factura.cliente.nombre);


// [descripcion='Tornillos',cantidad=2,importe=12.45]
var coste=0;
for (const key in factura.producto) {
    console.log(factura.producto[key].descripcion + ' - ' 
    + factura.producto[key].cantidad + ' - ' 
    + factura.producto[key].importe + ' = ' 
    + factura.producto[key].cantidad*factura.producto[key].importe);
    coste += (factura.producto[key].cantidad*factura.producto[key].importe)
}
console.log('Numero de articulos comprados: ' + factura.producto.length);


console.log('TOTAL FACTURA : ' + redondeo(coste) + ' euros.');

// Redondear importes de dinero
function redondeo(precio) {
    precio *=100;
    precio = Math.round(precio);
    precio /=100;
    return precio;
}

console.log('----------------------------------------');
console.log('----- REALIZAR REDONDEO PARA DINERO ----');
console.log('----------------------------------------');
var numero = 23.72;
var numero2 = 21.77;
var resultado = numero*numero2;
console.log(resultado);
resultado *= 100;
console.log(resultado);
resultado = Math.round(resultado);
console.log(resultado);
resultado /=100
console.log(resultado);
