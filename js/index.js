/* ProyectoFinal: Constanza Vilchez */
const btnYesIngreso = document.querySelector(".btnYesIngreso")
const bienvenida = document.querySelector(".bienvenida")

/* Datos de los jugadores */
const jugador1 = document.querySelector("#jugador1")
const jugador2 = document.querySelector("#jugador2")
let usuario1 = ""
let usuario2 = ""

jugador1.addEventListener("input", (event) => {
    usuario1 = event.target.value
})

jugador2.addEventListener("input", (event) => {
    usuario2 = event.target.value
})

btnYesIngreso.addEventListener("click", () =>{
        
    localStorage.removeItem("jugadores") /* Permite que si otros desean jugar, se guarde los nombres de los nuevos jugadores y se borren los antiguos */

    console.log("Nombre jugador 1 " + usuario1)
    console.log("Nombre jugador 2 " + usuario2)

    /* LocalStorage */
    localStorage.setItem("Jugador1", usuario1)
    localStorage.setItem("jugador2", usuario2)

    /* JSON */
    const jugadores = {
        persona1: usuario1,
        persona2: usuario2,
    }

    const jsonjugadores = JSON.stringify(jugadores)
    localStorage.setItem("jugadores",jsonjugadores)

    const jugadoresRecuperados = localStorage.getItem("jugadores")
        const jugadoresFormateados = JSON.parse(jugadoresRecuperados)
    console.log(jugadoresFormateados)    
})

/* Promesa + SetTimeout + Librería*/
const asincronico = (response) =>{
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            if(response){
                resolve()
            }else{
                reject()
            }
        },30000)
    })
}

const resultadoPromesa = asincronico(true)

resultadoPromesa
.then(()=>{
    Swal.fire({
        title: "¡Hola!",
        text: "¿Qué dices? ¿Jugamos?",
        imageUrl: "https://s.t13.cl/sites/default/files/styles/manualcrop_850x475/public/t13/field-imagen/2023-06/gettygatojapon.JPG.jpeg?itok=pyHR7u4B",
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
})
.catch(()=>{
    console.log("Error")
})