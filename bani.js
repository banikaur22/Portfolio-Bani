// Function to toggle the navigation menu's visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

// Add event listener to the hamburger icon
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling behavior for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter feature for the "Projects" section
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox effect for project images
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="Project Image">
            <span class="close">&times;</span>
        </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src);
    });
});

// Form validation for the "Contact" form
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}