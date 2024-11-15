document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        alert('Navigating to a new page!');
    });
});
// JavaScript for Contact Form Validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;
    let errorMessage = '';

    // Name validation
    if (name === '') {
        errorMessage += 'Name is required.\n';
    }

    // Email validation (basic format check)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        errorMessage += 'Email is required.\n';
    } else if (!email.match(emailPattern)) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Message validation
    if (message === '') {
        errorMessage += 'Message is required.\n';
    }

    if (errorMessage !== '') {
        alert(errorMessage); // Show error message
    } else {
        alert('Thank you for contacting us! We will get back to you soon.'); // Success message
        this.reset(); // Reset the form
    }
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link, .dropdown-content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dropdown Animation
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseenter', () => {
    dropdownContent.style.opacity = '1';
    dropdownContent.style.transform = 'translateY(0)';
    dropdownContent.style.transition = 'opacity 0.3s, transform 0.3s';
});

dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.opacity = '0';
    dropdownContent.style.transform = 'translateY(-10px)';
});

// Dynamic Greeting based on Time of Day
function updateGreeting() {
    const greetingElement = document.querySelector('.intro-section h1');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    greetingElement.textContent = `${greeting}, Welcome to MacEwan University Immigration Services`;
}
updateGreeting();

// Fade-in Effect on Scroll
const faders = document.querySelectorAll('.intro-section, .contact-form, footer');
const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
