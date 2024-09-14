// script.js

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Add your contact form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});