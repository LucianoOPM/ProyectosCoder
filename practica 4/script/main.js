let agua = 100;
let luz = 120;
let telefono = 100;
let internet = 300;
let gas = 200;
let ciclos = Number(prompt("cuantos recibos quiere revisar?"));
let x;
let y;
function pagos(servicio, lapzo){
    switch(servicio)
    {
        case "agua":
            if(lapzo){
                return agua * lapzo
            }
        break;
        case "luz":
            if(lapzo){
                return luz * lapzo
            }
        break;
        case "telefono":
            if(lapzo){
                return telefono * lapzo
            }
        break;
        case "internet":
            if(lapzo){
                return internet * lapzo
            }
        break;
        case "gas":
            if(lapzo){
                return gas * lapzo
            }
        break;
        default:
            document.write("Lo sentimos, el servicio que usted busca no está registrado");
    }
}

if (ciclos > 5){
    alert("No se pueden revisar tantos servicios");
}else{
for(let i = 0; i<ciclos; i+=1){
    x = prompt("¿Qué recibo quiere revisar el consumo?");
    y = prompt("¿Por cuantos días quiere revisar el consumo?");
    pagos(x,y);
    document.write("Su consumo del servicio " + x + " en los días " + y + " es de: ", pagos(x,y), "<br>")
}
}