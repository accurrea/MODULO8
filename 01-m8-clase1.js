// * FUNCIONES
let nom = "Julian"

function saludar (){
    console.log("buenas");
}
saludar()

function saludar2 (nombre){
    console.log(`Buenas soy ${nombre}`);
}

saludar2(nom)

let persona = {
    nombre: "Camilo",
    apellido: "Currea"
}

function nombre(objeto){
    console.log(`${objeto.nombre} ${objeto.apellido}`);
}

nombre(persona)

function propagacion(...parametro){
    console.log(parametro);
}

propagacion(1,2,3,["camilo","julian"],{nimbre:"nico",edad:26})

// * forma larga foreac
function suma(...numeros){
    let sum = 0
    numeros.forEach(i =>{
        sum += i
    })
    return sum
}

function suma2(...numeros1){
    console.log(numeros1.reduce((a,b) => a + b));
}

let res = suma(1,2,1)
console.log(res);
suma2(1,2,1)

clg 

