/* Proyecto Final: Constanza Vilchez */

/* Información jugadores */
const jugadoresRecuperados = localStorage.getItem("jugadores")
const jugadoresFormateados = JSON.parse(jugadoresRecuperados)


/* Caracteristicas del juego */
const btnYesIngreso = document.querySelector(".btnYesIngreso")
const estructuraGato = document.querySelector("#estructuraGato")
let haswinner = false

btnYesIngreso.addEventListener("click", () =>{
    estructuraGato.style.display = "block";
    let player1 = true;
    let celdas = document.getElementsByClassName("casilla");
    
    for (let i=0; i < celdas.length; i++){
        celdas[i].addEventListener("click", userMove);
    }

    function userMove(e){
        let casillaValue = e.target.innerHTML;
        if(!casillaValue.length){
            /* Operadores avanzados --> Operador Ternario */
            e.target.innerHTML = player1? "X" : "O";
            player1 = !player1; /* Indica si es positivo o negativo o vicersa */
        
            checkLine(0, 1, 2);
            checkLine(3, 4, 5);
            checkLine(6, 7, 8);
            checkLine(0, 3, 6);
            checkLine(1, 4, 7);
            checkLine(2, 5, 8);
            checkLine(0, 4, 8);
            checkLine(6, 4, 2);
        
        }
    }
    
    function checkLine(c1, c2, c3){
        if (
            celdas[c1].innerHTML.length &&
            celdas[c1].innerHTML == celdas[c2].innerHTML &&
            celdas[c2].innerHTML == celdas [c3].innerHTML
        ){
            mostrarGanador(celdas[c1].innerHTML);
        }
    }

    function mostrarGanador(player1){

        if(player1 === "X" && !haswinner){
            /* Librería */
              Swal.fire({
                title: "¡Felicidades!",
                text: jugadoresFormateados["persona1"] + " haz ganado.",
                imageUrl: "https://img.freepik.com/vector-gratis/copa-ganadores-oro_1284-18399.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711670400&semt=sph",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
        } 

        if(player1 === "O" && !haswinner){
            /* Librería */
            Swal.fire({
                title: "¡Felicidades!",
                text: jugadoresFormateados["persona2"] + " haz ganado.",
                imageUrl: "https://img.freepik.com/vector-gratis/copa-ganadores-oro_1284-18399.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711670400&semt=sph",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
        } 
        
        haswinner = true
    }  
})