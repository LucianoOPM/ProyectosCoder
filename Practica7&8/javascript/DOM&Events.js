const actualizar =(display, button)=>{
    if(display.value=="0"){
        display.value = ""
    }
    display.value += button
}
const calcular=(display)=>{
    display.value = eval(display.value)
    localStorage
}

const calculadora=(button, display)=>{
    switch(button){
        case "=":
            calcular(display)
            break
        default:
            actualizar(display, button)
            break
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    const display = document.querySelector(".display")
    const calculatorKeypad = document.querySelectorAll("button[type=button]")
    const memoria = document.querySelector("#memoria")

    for(boton of calculatorKeypad){
        boton.addEventListener("click",(evt)=>{
            let button = evt.target.value
            calculadora(button, display)
        })
    }
})