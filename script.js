// =======================
// RELOJ
// =======================

function mostrarLaHora() {
    var tiempo = new Date();

    var horas = tiempo.getHours();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();

    var dia = tiempo.getDate();
    var mes = tiempo.getMonth() + 1;
    var año = tiempo.getFullYear();

    var textoFinal = "Hoy es: " + dia + "/" + mes + "/" + año + " | Hora: " + horas + ":" + minutos + ":" + segundos;

    const reloj = document.getElementById("miReloj");
    if (reloj) {
        reloj.innerHTML = textoFinal;
    }
}

setInterval(mostrarLaHora, 1000);
mostrarLaHora();


// =======================
// CONTADORES
// =======================

function actualizarContador() {
    const articulos = document.querySelectorAll(".articulo");
    const contador = document.getElementById("contador-articulos");

    if (contador) {
        contador.textContent = "Artículos en Noticias Generales: " + articulos.length;
    }
}

function actualizarContadorTotal() {
    const contadorTotal = document.getElementById("contador-total");

    if (contadorTotal) {
        const articulosInicio = document.querySelectorAll(".articulo").length;
        const articulosDeportes = 3;
        const articulosNegocios = 3;

        const totalSitio = articulosInicio + articulosDeportes + articulosNegocios;

        contadorTotal.textContent = "Total de artículos del sitio: " + totalSitio;
    }
}

function actualizarContadorDeportes() {
    const contador = document.getElementById("contador-deportes");

    if (contador) {
        const articulos = document.querySelectorAll(".articulo");
        contador.textContent = "Artículos en Deportes: " + articulos.length;
    }
}

function actualizarContadorNegocios() {
    const contador = document.getElementById("contador-negocios");

    if (contador) {
        const articulos = document.querySelectorAll(".articulo");
        contador.textContent = "Artículos en Negocios: " + articulos.length;
    }
}

window.addEventListener("load", function() {
    actualizarContador();
    actualizarContadorTotal();
    actualizarContadorDeportes();
    actualizarContadorNegocios();
});


// =======================
// ARTÍCULOS
// =======================

const formulario = document.getElementById("formArticulo");
const listaArticulos = document.getElementById("listaArticulos");

if (formulario && listaArticulos) {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;

        if (titulo.trim() === "" || descripcion.trim() === "") {
            alert("Completa todos los campos");
            return;
        }

        const articulo = document.createElement("article");
        articulo.classList.add("articulo");

        articulo.innerHTML = `
            <h3>${titulo}</h3>
            <p><strong>Categoría:</strong> General</p>
            <p>${descripcion}</p>
        `;

        listaArticulos.appendChild(articulo);

        formulario.reset();

        actualizarContador();
        actualizarContadorTotal();
    });
}


// =======================
// CONTACTO
// =======================

const formularioContacto = document.getElementById("contactForm");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;
        const resultado = document.getElementById("resultadoContacto");

        if (nombre.trim() === "" || mensaje.trim() === "") {
            resultado.textContent = "Por favor complete todos los campos.";
            resultado.style.color = "red";
        } else {
            resultado.textContent = "Mensaje enviado correctamente.";
            resultado.style.color = "green";
            formularioContacto.reset();
        }
    });
}