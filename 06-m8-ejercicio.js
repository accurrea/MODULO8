// *1. primer punto 

function verdadero(){
    return true
}

console.log(verdadero());

// *2. punto 2

async function punto2(){
    await new Promise((valor)=> setTimeout(valor,5000))
    console.log("Buenas soy una promesa");
}

punto2()

// * 3. punto 3

function* generarId(){
    let id = 0
    while(true) {
        id++
        yield id
        if(id > 10){
            return
        }
    }
}
