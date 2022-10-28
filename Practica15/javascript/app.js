const btnTxt = document.querySelector("#btnTxt")
const btnJSON = document.querySelector("#btnJSON")
const btnArr = document.querySelector("#btnArr")
const btnAPI = document.querySelector("#btnAPI")
const btnPOST = document.querySelector("#btnPOST")

const enviarPOST=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',//Cuando se quieren enviar mensajes al servidor, se usan los metodos "POST", "PUT" y por "PATCH".Los más comunes son post y put que es para guardar datos en el servidor.
        body: JSON.stringify({
            titulo: 'CoderHouse',
            mensaje: "mensaje de prueba",
            userID: 5
        }),
        headers:{
            'Content-type':'application/json; charset=utf-8'
        }
    })
    .then((respuesta)=>{
        console.log(respuesta)
        return respuesta.json()
    })
    .then((apiPost)=>{
        console.log(apiPost)
    })
}

const renderApi=({sprites})=>{
    contenido.innerHTML+=`
    <img src="${sprites.front_default}">
    <img src="${sprites.front_shiny}">
    `
}

const obtenerDatosAPI=(id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${197}/`)
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((data)=>{
        renderApi(data)
    })
    .catch((error)=>{console.log(error)})
}

const renderArr=(formas)=>{
    const contenido = document.querySelector("#contenido")
    let html = ""

    formas.forEach(forma=>{
        const {figura, formula} = forma

        html += `La figura geometrica es: ${figura} y su formula es: ${formula}<hr>`
    })
    contenido.innerHTML+=html
}

const render=({nombre, edad, genero})=>{//Como la función render recibe un objeto como parametro, entonces se puede desetructurar.
    const contenido = document.querySelector("#contenido")

    contenido.innerHTML+=`
        <p>Mejor amiga: ${nombre}</p>
        <p>Edad: ${edad}</p>
        <p>Género: ${genero}</p>
        <hr>
        <pre>A ${nombre} la conozco desde hace años.
        y por eso es la persona más importante en mi vida.</pre>
        `
    }
const obtenerDatosArr=()=>{
    fetch("data/datos.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((datos)=>{
        renderArr(datos)
        console.log(datos)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const obtenerDatosJSON=()=>{
    fetch("data/data.json")
    .then((respuesta)=>{
        return respuesta.json()//Como un json es asincronico, aunque este buscando el archivo, puede seguir ejecutando el código por debajo de el.
    })
    .then((datos)=>{
        render(datos)
        console.log(datos)
    })
    .catch((error)=>{
        console.log(error)
    })
}
const obtenerDatosTxt=()=>{
    fetch("data/data.txt")
    .then((respuesta)=>{//La petición mientras el servidor este disponible, se irá siempre al catch, ya que obtuvo respuesta del servidor, más no obtuvo el documento que buscó
        console.log(respuesta)
        return respuesta.text() /*La "respuesta" por si sola no efectua nada, en este caso, si quiero ver el contenido de "data/data.txt" tengo que ejercer la función (que encontré con console.log)
        text()(la función que este adentro, va a devolver otra promesa, entonces necesitaremos concatenar más .then) y un return que me devuelva la función.*/
    })
    .then((datos)=>{
        console.log(datos)
    })
    .catch((error)=>{
        console.error(error)
    })//La petición se irá al catch, cuando el servidor por algún motivo, no esté disponible. Los catch por parametro siempre van pero casi nunca son usados, ya que un servidor casi siempre está activo.
}

btnTxt.addEventListener("click", obtenerDatosTxt)
btnJSON.addEventListener("click", obtenerDatosJSON)
btnArr.addEventListener("click", obtenerDatosArr)
btnAPI.addEventListener("click", obtenerDatosAPI)
btnPOST.addEventListener("click", enviarPOST)