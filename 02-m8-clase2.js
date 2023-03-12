// * funciones de flecha y funciones anonimas

const array = [1,2,4,7,9,10,25]

// * metodo simple
const array2 = array.map((valor)=> valor *2)
console.log(array2);

// * metodo con funciones
const array3 = array.map(function(valor){
    return valor*2
})
console.log(array3);

const dobleValor = valor => valor * 2   //todo: esta es una funcion anonima

const array4 = array.map(dobleValor)
console.log(array4);