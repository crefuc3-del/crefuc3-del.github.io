// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('subscribe-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            // In production, send this to your server
            alert('Thank you for subscribing! You\'ll receive updates about new publications and events.');
            emailInput.value = '';
            
            // Here you would typically send to your backend:
            // fetch('/api/subscribe', {
            //     method: 'POST',
            //     body: JSON.stringify({ email: email }),
            //     headers: { 'Content-Type': 'application/json' }
            // })
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 25px rgba(0,0,0,0.15)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Book display hover effect
const bookDisplay = document.querySelector('.book-display');
if (bookDisplay) {
    bookDisplay.addEventListener('mouseenter', function() {
        this.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
    });
    
    bookDisplay.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
    });
}

// Amazon link tracking
document.querySelectorAll('a[href*="amazon.com"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Amazon book link clicked:', this.href);
        // For analytics: gtag('event', 'click', { event_category: 'Amazon', event_label: 'Book Purchase' });
    });
});

// Feature cards animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature, .contact-card, .achievement').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// YouTube video lazy loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const videoIframe = document.querySelector('iframe');
    if (videoIframe) {
        videoIframe.setAttribute('loading', 'lazy');
    }
});

// Current year in footer (optional)
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// Contact form buttons tracking
document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim();
        console.log(`Contact action: ${action}`);
        // Analytics: gtag('event', 'click', { event_category: 'Contact', event_label: action });
    });
});

// Initialize tooltips for social links
document.querySelectorAll('.link-group a[href*="mailto:"]').forEach(link => {
    link.title = 'Send email to Wesley Leeroy';
});
