document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out! I'll get back to you soon.");
        // Here you would typically send the data to a server
    } else {
        alert("Please fill out all fields.");
    }
});
