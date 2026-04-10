const boton = document.getElementById("oscuroBtn");

function cambiarTema() {
        document.body.classList.toggle("oscuro")
}

boton.addEventListener("click", cambiarTema);