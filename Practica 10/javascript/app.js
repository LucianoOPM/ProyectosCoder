const formulario = document.querySelector("#votacion")
const chboxes = document.querySelectorAll("input[type=checkbox]")
const voto = document.querySelector("#voto")
const error = document.querySelector("#error")
let votacion= []

let validacionVoto=()=>{
    if(votacion.length>1){
        error.classList.add("red")
        error.innerHTML+=`<p>Sólo se puede votar a un mob.</p>`
    }else{
        localStorage.setItem("votacion", votacion[0])
    }
}


formulario.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    for(let chbox of chboxes){
        if(chbox.checked==true){
            votacion.push(chbox.value)
            validacionVoto()
        }
    }
})

voto.classList.add("green")
voto.innerHTML+=`<p>Su votación actual es: ${localStorage.getItem("votacion")}<br>Si cambió su votación, recargue la página para ver su nuevo voto.`