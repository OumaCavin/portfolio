// Smooth scrolling for navigation links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('form-message');

    // Basic validation
    if (!name || !email || !message) {
        errorMessage.textContent = 'All fields are required!';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address!';
        return;
    }

    // If validation passes
    errorMessage.textContent = '';
    this.submit();  // Proceed with form submission
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Project details data
const projects = {
    project1: {
        title: 'Telemedicine App',
        description: 'A comprehensive web-based platform that facilitates remote healthcare services and doctor consultations. Developed using HTML, CSS, and JavaScript.'
    },
    project2: {
        title: 'Hospital DB SQL Queries',
        description: 'Advanced SQL queries for data retrieval, grouping, and analysis from a hospital database. Optimized for complex filtering and reporting.'
    }
};

// Handle project link clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        
        // Display project details
        document.getElementById('project-title').textContent = projects[projectId].title;
        document.getElementById('project-description').textContent = projects[projectId].description;
        document.getElementById('project-details').style.display = 'block';
    });
});

// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    
    // Apply dark mode to each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });
});

// Set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

