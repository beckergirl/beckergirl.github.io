/* ----------------------- INDEX -----------------------*/

//CAMBIO DE IMÁGENES EN PORTADA:

/* document.addEventListener("DOMContentLoaded", function() {
    let imagenes = ["img/portadas/naveRosa_2.jpg", "velvet_inside.png", "img/deassin/portada_web_deassin.png","img/portadas/fondo.jpg"];
    let tiempoIntervalo = 5000; 

    let indiceImagenActual = 0;
    let foto_fondo = document.getElementById("foto_fondo");

     function cambiarImagen() {
        foto_fondo.src = imagenes[indiceImagenActual];
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    }
    cambiarImagen();

 setInterval(cambiarImagen, tiempoIntervalo);

}); */

//COOKIES:

      document.addEventListener("DOMContentLoaded", function() {
      const banner = document.getElementById("cookieConsentBanner");
      const acceptButton = document.getElementById("acceptCookies");

      acceptButton.addEventListener("click", function() {
            banner.style.display = "none";
           });
       });

