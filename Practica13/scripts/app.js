/*Un ejemplo rápido de una librería, sería:*/

let titulo = document.getElementById("titulo")
titulo.innerText+="Tacos de canasta"//Está es la forma convencional que se tiene de traer elementos de HTML a JS, ahora podríamos usar una librería para este tipo de casos.


//Ver parte de libreria.js para esto

let contenido = $("contenido")//Se aplicó una librería falsa que incorporaba una función la cual ejecuta el "getElementById" sin necesidad de estarlo escribiendo

contenido.innerText="Pizza"