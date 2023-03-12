// *  Funciones generadoras

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
const gen = generarId()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());