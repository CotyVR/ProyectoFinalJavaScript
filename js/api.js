/* Proyecto Final: Constanza Vilchez */

const url = "https://api.chucknorris.io/jokes/random"

fetch(url)
.then((respuesta) => respuesta.json())
.then((json)=>{
    const div = document.createElement("div")
    div.innerHTML = json.value;
    container.appendChild(div)
}) 
.catch((error)=>{
    console.log(error)
})