 // Initialize EmailJS with your user ID
 (function(){
    emailjs.init("VeYS-GUyVOck6K8cz");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_tlr1d1g', 'template_pcyodei', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
        
});
