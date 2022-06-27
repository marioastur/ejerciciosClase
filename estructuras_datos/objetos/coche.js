function Coche(marca,modelo,potencia,precio) {
    // Propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = Number(potencia);
    this.precio = Number(precio);

    // Metodos
    this.descuento = function () {
        this.precio -= 1200;
    }
}

var titulos = {
    rss:'Lector RSS',
    email:'Gestor de email',
    procesador:'Libre Office'
};
