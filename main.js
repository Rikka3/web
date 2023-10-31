document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
    });
});
