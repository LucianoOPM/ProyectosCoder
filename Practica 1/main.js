let nombre = prompt("¿Cuál es su nombre?"); //Aqui le pido el dato al usuario por medio de un prompt
let apellido = prompt("¿Cuál es tu apellido?"); //Aqui le pido otro dato al usuario igual por medio del prompt que se concatenará más adelante
let edad = Number(prompt("¿Cuál es su edad?")); //Aqui le pido un dato de valor númerico, que al usar la propiedad "Number" se convierte en un dato de valor númerico
let valor = 10; //El valor que estoy sumando, esto fue completamente mi elección
let suma = edad + valor; //La operación deseada 

document.write("Hola " + nombre + " " + apellido + " En 10 años tendrás: " + suma); //El mensaje que mostraré en pantalla luego de que el usuario rellenara los formularios correctamente.