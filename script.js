
// function cuadradoCallback(value, callback){
//     setTimeout(() => {
//         callback(value, value*value)
//     },0 | Math.random() * 100);
// }

// cuadradoCallback(0, (value,result)=>{
//     console.log("inicia Callback");
//     console.log(`Callback: ${value}, ${result}`)
// })







// function cuadradoPromise(value){
//     if (typeof value !== "number")return Promise.reject(`Error,el valor "${value}" ingresado no es un numero.`);
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve({
//                 value,
//                 result: value*value
//             });
//         },0 | Math.random() * 1000);
//     });
// }

// cuadradoPromise(0)
// .then(obj => {
//     console.log('Inicio Promise');
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(1);
// })
// .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(2);
// })
// .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(3);
// })
// .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(4);
// })
// .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(5);
// })
// .then(obj => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     console.log('Fin Promise');
// })
// .catch(err => console.error(err));


// FUNCION ASINCRONA 
    // funcion asincrona con la sintaxis de Promise, el setTimeout simula ser una api, si da respuesta correcta devuelve el resultado y value de lo contrario devuelve el reject
function cuadradoPromise(value){
    if (typeof value !== "number"){
        return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`);
    }
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value*value
            });
        },0|Math.random()*1000);
        });
    }
    // lo convinamos con async function que sirve para manipular el resultado, este esta en un try catch, en caso de ser reject entra en el catch en caso de ser positivo entra en el try
    async function funcionAsincronaDeclarada(){
        try{
            console.log('-inicio Async function-');
            let obj= await cuadradoPromise(0);
            console.log(`Async Function:${obj.value},${obj.result}`)
             obj= await cuadradoPromise(1);
            console.log(`Async Function:${obj.value},${obj.result}`)
             obj= await cuadradoPromise(2);
            console.log(`Async Function:${obj.value},${obj.result}`)
             obj= await cuadradoPromise(3);
            console.log(`Async Function:${obj.value},${obj.result}`)
             obj= await cuadradoPromise(4);
            console.log(`Async Function:${obj.value},${obj.result}`)
            console.log("Fin async function")  
        }catch(err){
            console.error(err)
        }
    }
funcionAsincronaDeclarada();
