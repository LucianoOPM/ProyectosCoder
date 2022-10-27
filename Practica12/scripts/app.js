/*Operadores condicionales y avanzados*/


//Sugar syntax

/* 
let contador = 0
contador = contador + 1
contador++ Este se ejecuta en la linea siguiente
++contador este se ejecuta en la linea actual
También existen variables
contador = contador - 1
contador--
--contador

contador +=1
contador -=1
contador *=1
contador /=1
*/

/*Operador ternario*/

//Es una alternativa al metodo "if else"

let temperatura = 39
if(temperatura<=31){
    console.log("esta fresquito")
}else{
    console.log("hace calor")
}
//Este es el método del que tenía conocimiento de hacer un "if else".
//El sintaxis es: condicion ? caso1 : caso2.La condición resuelve true o false, En el caso1 se ejecuta la instruccion a ejecutar si al condicion es verdadera y caso2 si es falsa

let edad = 17

let validacion = edad >= 18 ? "puede comprar cerveza" : "No puede comprar cerveza"
console.log(validacion)

/*El operador ternario ofrece un return implicito para cada caso. Eso quiere decir que el valor se agrega en la variable declarada, en este caso fue validación*/

let disponible = true
let usable = true
let pago = false

console.log(disponible && pago? "Si, es usable"  : "No, no está disponible")
console.log(disponible? usable? "Si, es usable" : "No, no es usable" : "No, no está disponible")


let normas = false

let cuestionario = normas? true : false

console.log(cuestionario? "Cumple con las normas de seguridad" : "No cumple con las normas de seguridad")

let ana = {
    edad: 24,
    sexo: "femenino"
}

let cuestionario1 = ana.edad>=24? true : false
console.log(cuestionario1? "Si, es mayor" : "No, es menor")

/*if(){} Este es un operador*/
/*if(){}else es otro operador distinto */
/*if(){}else if(){}else este es OTRO operador distinto*/


/*Operador logico AND*/
//Sintaxis condicion comparacion && ejecución

let medicamento = [true]

let obligacion = medicamento.length===0 && "No hay registro de que haya tomado sus medicamentos"//También tiene un return explicito.
console.log(obligacion)
//En caso de que mi array "medicamento" este vacio, se ejecutará el console.log() porque la condicion se está cumpliendo. En caso de que no se cumpla, no se ejecuta el console.log()


/*Operador logico OR*/

let favs = localStorage.getItem("favoritos") || []
/*El operador OR te entrega el primer caso si se tiene un contenido trurty, en caso de no encontrar el primer caso, te regresa el segundo caso*/

console.log(favs)



/*Desestructuración (Destructuring)*/

let producto = {
    nombre: "papas fritas",
    precio: 25,
    disponibilidad: true 
}

//Método antiguo de acceder a cierta información de un objeto.
console.log(producto.precio)

/*Con la desestructuración lo que se podría hacer es:*/

let {nombre, disponibilidad} = producto
console.log(disponibilidad)
console.log(nombre)
/* Se crea una variable entre llaves con el nombre al cual quiero acceder a la información y si requiero más de uno, se apartan con una coma.En este caso traje la información de nombre
y disponibilidad de mi objeto llamado "producto"*/

/*Hay una inconvenencia a la hora de declarar variables y es que: Si se tiene declarada una variable con el mismo nombre al cual queremos acceder del objeto, nos va a causar una 
inconveniencia, entonces ahí usamos un alías.*/

let carrito = {
    cosa: "television",
    precio: 10000,
    remate: false,
    caracteristicas:{
        color: "negro",
        ancho: 10,
        alto: 5,
        pulgadas: 15
    }
}

/* 
let color = "rojo"            Como ya tengo color declarado, el color del carrito no puede ser declarado, porque ya es una variable, para estos casos se utiliza un alías.
let {color, precio} = carrito 
*/

let remate = true
let color = "azul"
let {remate: remateCarrito, caracteristicas:{color:colorCarrito}} = carrito //colorCarrito es también un alias, ya que arriba tengo declarada una variable con el nombre de color
console.log(color)
console.log(colorCarrito)

console.log(remate)
console.log(remateCarrito)//Para acceder al valor, se pone el nombre del alías.

/* 
let {telefono} = carrito
console.log(telefono) Si queremos acceder a un valor del objeto sin tenerlo definido, nos regresa un "undefined"
*/
carrito.telefono = 123456789
let {telefono} = carrito
console.log(telefono)



/*Desestructuración de parametros*/


/*Nosotros a la hora de hacer una función, le pasamos los parametros con los que la función va a trabajar*/

const computadora = {
    nombre: "PC Gamer",
    costo: 20000,
    componentes: {
        procesador: "AMD",
        GPU: "NVDIA",
        RAM: 16
    } 
}

function identificar(valor){
    console.log(valor.nombre)
}
identificar(computadora)
//Pero si nosotros ya sabemos el objeto que le vamos a pasar a la función, podemos hacer lo siguiente:

function identificar1({costo, componentes:{procesador}}){
    console.log(costo)
    console.log(procesador)
}
identificar1(computadora)//Aqui la función ya sabe que va a acceder a los valores de "computadora", entonces desetructuramos dentro de la función.



/*Desestructuración de Arrays*/
//La desestructuración de arrays al no tener una forma de identificar el contenido de adentro, se hace por orden de posición.

const nombres = ["Luciano", "Ana", "Fer", "Valeria"]

const [,,c] = nombres
console.log([c])//Fer

/*Cuando se quiere saltar un valor del array, la posición se deja vacia y se salta la posición*/

/*Spread de arrays*/

const vehiculos = ["Nissan", "Toyota", "Tesla", "Mitsubishi"]

console.log(vehiculos)
console.log(...vehiculos)


const numeros = [1,9,20,6,78,-1,36]
console.log(Math.max(...numeros))
console.log(Math.min(numeros))//NaN
/*La función más practica que tiene el spread de arrays es en cuestión de los numeros y el método "Math", ya que Math no acepta un objeto/array como parametro*/


/*Spread en objetos*/



 
const obj1 = {id:1,nombre: "Paco"}
const obj2 = {id:2,nombre: "Pedro"}
const obj3 = {id:1,nombre: "Paco"}
console.log(obj1===obj2)//false
console.log(obj1===obj3)//false
console.log(obj2===obj3)//false
/*En un principio, aunque el operador 1 y el operador 3 tengan los mismos valores, en una comparación, no son lo mismo, ya que cada uno apunta a su espacio de memoria individualmente.*/

const usu1 = {id:1, nombre:"PS4"}
const usu1clon = {...usu1}//Con el spread podemos almacenar lo que está guardado dentro de usu1 en usu1clon
console.log(usu1clon)
const usu3={
    ...usu1,
    precio: 5000,
    color:"blanco"
}
console.log(usu3)//Guarde el contenido que estaba en usu1 y lo concatené con nuevos keys de objetos propios en usu3


/*Rest of parameters*/


function sumar(...numeros){//El spread operator recibe todos los parametros que le quiera mandar, y los guarda adentro de un array
    console.log(numeros)//[4,2] y [10,15,30,25] valores guardados dentro de un array por el spread operator
}

sumar(4,2)
sumar(10,15,30,25)




let descosear=(...objs)=>{
    for(let i = 0;i<objs.length;i+=1){
        let key1 = objs[i]
        console.log(key1)
    }
}
descosear(usu1,usu1clon,usu3)