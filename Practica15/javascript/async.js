const btndatosAPI=document.querySelector("#DatosAPI")


const render=(perfiles)=>{
    const contenido=document.querySelector("#contenido")
    let html = ""

    perfiles.forEach(perfil => {
    const {author, post_url} = perfil
    html+=`
    <p>Autor: ${author}</p>
    <a href="${post_url}" target="_blank">Ver imagen</a>
    <hr>`
})
contenido.innerHTML = html
}

const obtenerDatosAPI=async()=>{
    try{//El try es lo mismo que fetch then solo que nos ahorra más lineas de código, pero sigue haciendo la misma función.
        const resultado = await fetch("https://picsum.photos/list")//El await espera a que el servidor responda para seguir el flujo de el programa.
        const json = await resultado.json()//Una vez que el fetch nos trajó los datos necesarios, como resultado también trae una promesa, tiene que tener el método await para que pueda seguir el flujo.
        render(json)
    }catch(error){
        console.log(error)
    }
}

btndatosAPI.addEventListener("click", obtenerDatosAPI)

//Uno puede declarar una funcion asincrona, para usar los métodos await. Si la función no se declara antes como asincrona, los await tiran un error.