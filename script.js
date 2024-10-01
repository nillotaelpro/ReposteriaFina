document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && correo && mensaje) {
        document.getElementById('respuesta').textContent = `Gracias, ${nombre}. Nos pondremos en contacto contigo pronto.`;
        document.getElementById('formularioContacto').reset();
    } else {
        document.getElementById('respuesta').textContent = 'Por favor, completa todos los campos.';
    }
});