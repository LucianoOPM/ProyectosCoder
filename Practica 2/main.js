let peticion = prompt("¿Qué sabor de helado quiere?");
let sabor = peticion;
let dinero;
let costos = {
    chocolate : 100,
    vainilla : 50
};
let vuelto;
let reinicio;

if (sabor == "chocolate"){
    alert("El sabor escogido es chocolate, el costo es de: $100");
    dinero = Number(prompt("¿Con cuanto va a pagar?"));
        if (dinero >= 100){
            vuelto = dinero - costos.chocolate;
            alert("Su vuelto es de: " + vuelto);
        }else{
            alert("No cuenta con el dinero suficiente para pagar");
        }
} else if(sabor == "vainilla"){
    alert("El sabor escogido es vainilla, el costo es de: $50");
        dinero = Number(prompt("¿Con cuanto va a pagar?"));
            if(dinero >= 50){
                vuelto = dinero - costos.vainilla;
                alert("Su vuelto es de: " + vuelto);
            }else{
                alert("No cuenta con el dinero suficiente para pagar");
            }
}else{
    reinicio = prompt("No contamos con ese sabor, ¿Desea recargar la página?");
    if (reinicio==="si")
    {
        window.location.reload()
    }

}