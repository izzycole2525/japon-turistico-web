document.addEventListener("DOMContentLoaded", function () {

    const mensaje = document.getElementById("mensajeBienvenida");

    if (mensaje) {

        const hora = new Date().getHours();

        if (hora >= 5 && hora < 12) {
            mensaje.textContent = "🌸 Buenos días. Bienvenido a nuestro recorrido por Japón.";
        } else if (hora >= 12 && hora < 18) {
            mensaje.textContent = "☀️ Buenas tardes. Descubre la cultura japonesa.";
        } else {
            mensaje.textContent = "🌙 Buenas noches. Disfruta explorando Japón.";
        }

    }

    const imagen = document.getElementById("sliderImagen");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");

    if (imagen) {

        const imagenes = [
            "images/japon.png",
            "images/castillo.jpg",
            "images/gion.avif",
            "images/hanami.jpg",
            "images/matsuri.webp",
            "images/tokio-antigua.jpg"
        ];

        let indice = 0;

        function mostrarImagen() {
            imagen.src = imagenes[indice];
        }

        if (siguiente) {
            siguiente.addEventListener("click", function () {
                indice++;
                if (indice >= imagenes.length) indice = 0;
                mostrarImagen();
            });
        }

        if (anterior) {
            anterior.addEventListener("click", function () {
                indice--;
                if (indice < 0) indice = imagenes.length - 1;
                mostrarImagen();
            });
        }

        setInterval(function () {
            indice++;
            if (indice >= imagenes.length) indice = 0;
            mostrarImagen();
        }, 4000);

    }

    const tarjetas = document.querySelectorAll(".categoria-card");

    tarjetas.forEach(function(tarjeta){

        tarjeta.addEventListener("mouseenter",function(){
            tarjeta.style.transform="translateY(-8px)";
            tarjeta.style.transition=".3s";
        });

        tarjeta.addEventListener("mouseleave",function(){
            tarjeta.style.transform="translateY(0)";
        });

    });

    const botones = document.querySelectorAll(".btn-principal,.btn-card");

    botones.forEach(function(boton){

        boton.addEventListener("mouseenter",function(){
            boton.style.transform="scale(1.05)";
        });

        boton.addEventListener("mouseleave",function(){
            boton.style.transform="scale(1)";
        });

    });

    console.log("Proyecto Japón cargado correctamente.");

});
