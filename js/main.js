/* cuenta regresiva */
const days = document.getElementById("days"),
    hours = document.getElementById("hours"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

const cumple = new Date('April 19, 2025 21:00:00').getTime();
setInterval(() => {
    let hoy = new Date().getTime();
let tiempoRestante = cumple - hoy;

let dias = Math.floor(tiempoRestante / 86400000);
let horas = Math.floor(tiempoRestante / 3600000) % 24;
let minutos = Math.floor(tiempoRestante / 60000) % 60;
let segundos = Math.floor(tiempoRestante / 1000) % 60;

days.innerHTML = dias
hours.innerHTML = horas
min.innerHTML = minutos
sec.innerHTML = segundos

if(dias < 10){days.innerHTML = "0" + dias}
if(horas < 10){hours.innerHTML = "0" + horas}
if(minutos < 10){min.innerHTML = "0" + minutos}
if(segundos < 10){sec.innerHTML = "0" + segundos}

}, 1000);

/* musica de fondo */
/* const musica = document.getElementById('miMusica');
const botonSilencio = document.getElementById('botonSilencio');

botonSilencio.textContent = 'Activar sonido';
musica.muted = true;

botonSilencio.addEventListener('click', () => {
  if (musica.muted) {
    musica.muted = false;
    botonSilencio.textContent = 'Silenciar';
  } else {
    musica.muted = true;
    botonSilencio.textContent = 'Activar sonido';
  }
}); */

const musica = document.getElementById('miMusica');
const botonReproducirPausar = document.getElementById('botonReproducirPausar');

let reproduciendo = false; // Variable para rastrear el estado de reproducción

botonReproducirPausar.addEventListener('click', () => {
    if (reproduciendo) {
        musica.pause();
        botonReproducirPausar.textContent = '';
    } else {
        musica.play();
        botonReproducirPausar.textContent = '';
    }
    reproduciendo = !reproduciendo; // Cambia el estado de reproducción
});