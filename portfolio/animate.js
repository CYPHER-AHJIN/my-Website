// Mobile menu functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Name animation functionality
const nameElement = document.querySelector('.name');
let isStopped = false;

nameElement.addEventListener('mouseenter', function() {
    if (!isStopped) {
        this.classList.add('stopped');
        isStopped = true;
    }
});

nameElement.addEventListener('click', function() {
    this.classList.add('stopped');
    isStopped = true;
});

document.querySelector('.show-less').addEventListener('click', function() {
    nameElement.classList.remove('stopped');
    isStopped = false;
});

// Intersection Observer for all sections and cards
const sections = document.querySelectorAll('.projects, .links, .learning, .skills');
const projectCards = document.querySelectorAll('.p-1, .p-2, .p-3, .p-4, .p-5');
const linkCards = document.querySelectorAll('.link-card');
const learningCards = document.querySelectorAll('.l-1, .l-2, .l-3');
const skillCards = document.querySelectorAll('.s-1, .s-2, .s-3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Observe all project cards
projectCards.forEach(card => {
    observer.observe(card);
});

// Observe all link cards
linkCards.forEach(card => {
    observer.observe(card);
});

// Observe all learning cards
learningCards.forEach(card => {
    observer.observe(card);
});

// Observe all skill cards
skillCards.forEach(card => {
    observer.observe(card);
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('backToTop');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});