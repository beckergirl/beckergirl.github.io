/* formulario */
const btn = document.getElementById('button');

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
});