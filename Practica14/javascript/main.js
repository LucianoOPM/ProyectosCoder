//Asincronismo

/*Función naturalmente asincronica*/
/* let mensaje =()=>{
    console.log("Este es un mensaje con delay")
}
console.log("hola")
setTimeout(mensaje, 6000)
console.log("adios") */
//setTimeout recibe dos parametros, una función y numeros que significan los milisegundos que tardará la ejecucion. 1000=1s, 10000=10s
//En el ejemplo, primero se ejecutan los dos console.log, y después aparece el mensaje de la función "mensaje" por los segundos que tiene de delay (5 segundos)
//Aunque setTimeout reciba un valor "0" como parametro, aún así se ejecutará después de los llamados a consola, ya que JS le da prioridad a las funciones sincronicas y después ejecuta las asincronicas

/* for(let letra of "hola"){
    setTimeout(()=>{
        console.log(letra)
    }, 4000)
}
for(let letra of "Adios"){
    setTimeout(()=>{
        console.log(letra)
    }, 2000)
} */
//setTimeout aplica un delay a la hora de ejecución, la sentencia "for" se ejecuta ya que es una funcion sincronica, y al terminar, se ejecuta inmediatamente la otra, solamente que el interior
//es el que tiene un delay aplicado, en ese entonces el mensaje a mostrar va a tener un retraso de 4 y 2 segundos respectivamente



/*Uno de los usos de las funciones asincronicas, es cuando hacemos pedidos a bases de datos, ya que si tuvieramos que esperar a que la base de datos nos entregue la información
nuestro programa tardaría en ejecutarse por esperar la respuesta de la base de datos.*//*Cuando se necesita un dato que una función asincrona nos da, si no tenemos la respuesta nuestro 
codigo se rompe, ya que el dato necesitado aún no es entregado.*/

/*Ejemplo de callback */

/* let sumar=(num1, num2)=>{
    let resultado = num1 + num2
    console.log(resultado)
}

let numerosRecibidos=(funcionSumar)=>{
    let num1 = 5
    let num2 = 10
    funcionSumar(num1,num2)
}

numerosRecibidos(sumar) */

/*El anterior ejemplo la función NumerosRecibidos es la que se encarga de recibir los datos del usuario y la función sumar se encarga de hacer los procesos necesarios con los datos introducidos.
En resúmen. Una función callback recibe una función como parametro y le transfiere los datos que necesite la función para trabajar.*/



/*Pila de llamadas*/

/* function saludar() {
    // [1] Código
    diHola();
    // [2] Código
}
function diHola() {
    return "!Hola!";
} 
// Invocar la función `saludar`
saludar();
// [3] Código */


/*El anterior ejemplo comienza con la lista de pila de llamadas vacía, hasta que se topa con el llamado a la funcion saludar(), entonces la agrega a la lista de ejecución y la ejecuta,
como dentro de la función saludar hay otra función siendo llamada (diHola()), añade esa función a lista de llamadas y la ejecuta, cuando la ejecuta se va liberando la pila de llamadas.*/


/*Pila de llamadas vacía > ejecucion de saludar() > ejecución de diHola() > mostrar el contenido de diHola() > salir de diHola() > salir de saludar() > Pila de llamadas vacía*/


/*setInterval*/


/*setInterval ejecuta la función una determinada cantidad de veces cada X tiempo segun el parametro que le otorguemos. */

/* 
setInterval(()=>{
    console.log("mensaje")
}, 1000)
*/
//En este ejemplo, setInterval va a mostrar la palabra "mensaje" cada 1s en la consola. De esta forma no hay manera de detener el conteo.

/* let i = 0

const temporizador = setInterval(()=>{
    i += 1
    console.log(i)
    console.log("hola")
    if(i>=10){
        clearInterval(temporizador)
        console.log("terminó el temporizador")
    }
}, 2000) */

//Ahora, si la función setInterval la metemos dentro de una variable, se puede llegar a detener si utilizamos el nombre de la variable y la función clearInterval para detenerla.


/*Callback Hell*/


/* 
let compras=[]

let callBackhell=()=>{
    setTimeout(()=>{
        agregarAlCarrito("Jabón", mostrarCompras)
        setTimeout(()=>{
            agregarAlCarrito("Kilo de platanos", mostrarCompras)
            setTimeout(()=>{
                agregarAlCarrito("Pan", mostrarCompras)
            },1000)
        }, 1000)
    }, 1000)
}

let mostrarCompras = ()=>{
    console.log(compras)
}

let agregarAlCarrito=(articulo, callback)=>{
    compras.push(articulo)
    callback()
}
callBackhell() */

/*callbackHell es básicamente, repetir un callback determinado numero de veces, el programa y el rendimiento son funcionales, pero a la hora de leer el código, el código es practicamente
ilegible, ya que no se sabe cuando como o donde comienza cada función.*/


/*Promesas */

let pasajeros = []

const nuevosPasajeros = persona => new Promise((resolve, reject) => {
    setTimeout(()=>{
        persona == undefined && reject({code: 5000, error: "No se encontró a la persona."})
        pasajeros.push(persona)
        resolve(`Se agregó correctamente a ${persona}`)
    }, 3000)
})


nuevosPasajeros("Luciano")
    .then((resultado)=>{
        console.log(resultado)
        return nuevosPasajeros("Ana")
    })
    .then((resultado)=>{
        console.log(resultado)
        return nuevosPasajeros("Fer")
    })
    .then((resultado)=>{
        console.log(resultado)
        return nuevosPasajeros()
    })
    .then((resultado)=>{
        console.log(resultado)
        return nuevosPasajeros("Valeria")
    })
    .catch((error)=>{console.error(error.error)})
    .finally(()=>{console.log(pasajeros), console.log("terminó la ejecución")})


/*Una promesa se ejecuta con las palabras "new Promise", y contiene dos parametros, comummente se les llama "resolve" y "reject".
cuando se efectua una busqueda de X tipo de información, se evalua y si la busqueda no encuentra resultados, devuelve un "reject" y se escribe la sentencia deseada en caso de contener un error.
por otro lado, si nuestra busqueda fue exitosa y recibimos los datos correctamente. efectuamos la sentencia "resolve".*/

/*Then, catch, finally*/

/*Cuando se efectua la busqueda, los encargados de conectar a nuestra función con la promesa son then, catch y finally los cuales hacen lo siguiente: 
Si la busqueda es exitosa, then se efectua y hace lo que dicte "resolve" de hacer, por otro lado, si la busqueda fracasa, catch se va hacía el "reject" y efectua lo que dictamina
y finally, que, sin importar si la busqueda fue exitosa o no, se efectua de igual forma. En cualquier momento que el "then" no encuentré lo que buscaba, automaticamente se va hacía
el catch, sin necesidad de tener un catch en cada uno de los then.

Then no encadena busquedas si no que, tenemos que encadenarla haciendo otra petición al servidor dentro del mismo "then"*/