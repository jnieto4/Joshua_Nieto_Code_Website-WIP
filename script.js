// Initialize EmailJS
emailjs.init('cb8nZM6xwzEM16E1S'); // Replace with your Public Key

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;

  emailjs.sendForm('service_hy4l2ec', 'template_3zy4ki6', form)
    .then(function(response) {
      console.log('Success!', response.status, response.text);
      alert('✅ Thank you for your message! I will get back to you soon.');
      form.reset();
    }, function(error) {
      console.log('Failed...', error);
      alert('❌ Sorry, there was an error. Please try again.');
    });
});