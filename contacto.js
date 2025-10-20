// contacto.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contacto form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // evita el envío para validar

    // Campos
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validación básica
    if (!nombre) {
      alert('Por favor, ingresa tu nombre.');
      form.nombre.focus();
      return;
    }

    if (!email || !validateEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      form.email.focus();
      return;
    }

    if (!mensaje) {
      alert('Por favor, escribe un mensaje.');
      form.mensaje.focus();
      return;
    }

    alert('¡Gracias por contactarnos! Responderemos pronto.');

    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const productos = document.querySelectorAll('#catalogo .col-md-4');

  searchInput.addEventListener('input', () => {
    const filtro = searchInput.value.toLowerCase();

    productos.forEach(producto => {
      const nombre = producto.querySelector('.card-title').textContent.toLowerCase();
      if (nombre.includes(filtro)) {
        producto.style.display = '';
      } else {
        producto.style.display = 'none';
      }
    });
  });
});

