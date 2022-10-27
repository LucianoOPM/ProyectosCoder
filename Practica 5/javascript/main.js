function NuevaFactura (nombre, costo, fechas){
    this.nombre = nombre
    this.costo = costo
    this.fechas = fechas
    this.mostrarValorEnFechas = function(){
        return this.costo * this.fechas
    }
}
let confirmar;
do{
    let nombre = prompt("¿Cual es la factura a pagar?")
    let costo = Number(prompt("¿Cual es el costo de la factura?"))
    let fecha = prompt("¿En que fechas quiere revisar su gasto de la factura?")

    let factura = new NuevaFactura(nombre, costo, fecha)
    console.log(factura)
    document.write(factura.mostrarValorEnFechas())

    confirmar = confirm("Desea agregar más facturas a su registro?")
}while (confirmar === true)