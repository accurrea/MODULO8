// * Funciones asincronas y promesas

function miAsinc(){

}

const promesa = new Promise((resolve,reject)=>{
    if(true){
        resolve()
    }else{
        reject()
    }
})

promesa
    .then(()=> console.log("Esta bien"))
    .catch(()=> console.log("Error"))