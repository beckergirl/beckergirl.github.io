/* formulario */
/* const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ppy2c0u';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = `{ Email enviado }`;
      alert('Sent!');
    }, (err) => {
      btn.value = `{ Email enviado }`;
      alert(JSON.stringify(err));
    });
}); */
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío normal del formulario

  btn.value = 'Enviando...'; // Cambia el texto del botón mientras envía

  const serviceID = 'default_service';
  const templateID = 'template_ppy2c0u';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '¡Email enviado!';
      alert('El email se ha enviado correctamente.');
    })
    .catch((err) => {
      btn.value = 'Enviar Email'; // Restaurar el texto original en caso de error
      alert('Error al enviar el email. Inténtalo de nuevo.');
      console.error('Error:', err);
    });
});
