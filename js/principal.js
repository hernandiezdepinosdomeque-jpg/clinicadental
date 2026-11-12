// ==========================================================
// Clínica Dental Sonrisa · JavaScript
// 1) Abre y cierra el menú en el móvil.
// 2) Los enlaces marcados con "data-demo" NO llaman ni abren
//    WhatsApp: muestran un aviso de que son de demostración.
//    Cuando pongas los números reales, borra "data-demo"
//    de cada enlace en index.html y funcionarán de verdad.
// ==========================================================

// --- Menú móvil ---
const botonMenu = document.querySelector('.menu-boton');
const menu = document.getElementById('menu');

botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
  botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
  });
});

// --- Aviso de botones de demostración ---
const aviso = document.querySelector('.aviso-flotante');
let temporizador;

function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.hidden = false;
  clearTimeout(temporizador);
  temporizador = setTimeout(() => { aviso.hidden = true; }, 3500);
}

document.querySelectorAll('[data-demo]').forEach((enlace) => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault();
    const esWhatsapp = enlace.href.includes('wa.me');
    mostrarAviso(esWhatsapp
      ? 'Botón de demostración: aquí se abrirá WhatsApp con el número real de la clínica.'
      : 'Botón de demostración: aquí se llamará al teléfono real de la clínica.');
  });
});

document.querySelectorAll('[data-demo-legal]').forEach((enlace) => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault();
    mostrarAviso('Texto legal pendiente de redactar.');
  });
});
