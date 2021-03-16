const btn = document.getElementById('form-button');
const form = document.getElementById('contact-form');



 form.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'gmail';
   const templateID = 'suggestions';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Your Message has been received, we will reply as soon as possible!');
      btn.value = 'Message Sent';
      
    }, (err) => {
      btn.value = 'Send Email';
      alert('Failed, Please try again!'(err));
    });

});