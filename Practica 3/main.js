/*let valor = Number(prompt("¿Qué tabla de multiplicar quiere?"))

for (let i = 1; i<=10; i+=1){
    let resultado = valor * i
    document.write("<p>", valor, " X " ,i, " = ", resultado,"</p>");
}*/
let num1 = Number(prompt("Que tabla de multiplicar desea:"));
let i = 0

do{
    i+=1
    resultado = num1 * i
    document.write("<p>", resultado, "</p>")
}while(i<10)