// ===== NAVIGATION TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 13, 13, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.section-header, .timeline-item, .edu-card, .skill-category, .interest-card, .contact-card').forEach(el => {
    observer.observe(el);
});

// ===== TYPING ANIMATION =====
const typingElement = document.querySelector('.terminal-typing');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Reset and repeat
            setTimeout(() => {
                typingElement.textContent = '';
                i = 0;
                typeWriter();
            }, 3000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 1500);
}

// ===== HOVER EFFECTS FOR CARDS =====
document.querySelectorAll('.timeline-card, .edu-card, .skill-category, .interest-card, .contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// ===== SKILL TAG HOVER ANIMATION =====
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== CONSOLE EASTER EGG =====
console.log('%c Welcome to Viharika\'s Portfolio! ', 'background: linear-gradient(135deg, #10a37f, #1a7f64); color: white; font-size: 16px; padding: 10px; border-radius: 8px;');
console.log('%c Looking for a talented Business Analyst? Get in touch! ', 'color: #10a37f; font-size: 12px;');
