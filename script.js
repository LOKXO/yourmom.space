// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Vanta.js background
    VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fffe,
        backgroundColor: 0xa0a,
        points: 20.00,
        maxDistance: 30.00,
        spacing: 20.00
    });

    // Parallax effect
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {duration: 0.23, x: e.clientX, y: e.clientY});
        gsap.to(cursorFollower, {duration: 0.33, x: e.clientX, y: e.clientY});
    });

    // Cursor grow effect on clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea');
    clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('grow');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP animations
    // Header animation
    gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Home section animations
    gsap.from('.glitch', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    });

    gsap.from('.subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.cta-button', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section:not(#home)');
    
    sections.forEach(section => {
        gsap.from(section.children, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            }
        });
    });

    // Project cards animation
    gsap.from('.project-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        }
    });

    // Form animation
    gsap.from('#contact-form', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        }
    });

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Form label animation
    const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('active');
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.previousElementSibling.classList.remove('active');
            }
        });
    });

    // TagCloud for skills
    const container = '.tagcloud';
    const texts = [
        'Quantum Computing', 'Neural Architecture', 'Blockchain', 'AR/VR', 'AI',
        'Rust', 'Go', 'Python', 'WebAssembly', 'Solidity',
        'TensorFlow', 'Unreal Engine', 'Ethereum', 'Kubernetes', 'GraphQL',
        'Quantum Algorithms', 'Parallel Universes', 'Time Manipulation', 'Reality Warping', 'Dimensional Traversal'
    ];

    const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true
    };

    TagCloud(container, texts, options);

    // Quantum field animation
    const quantumFields = document.querySelectorAll('.quantum-field');
    quantumFields.forEach(field => {
        gsap.to(field, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: 'none'
        });
    });

    // Glitch effect on hover for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                skewX: 2,
                skewY: 2,
                duration: 0.1,
                repeat: 5,
                yoyo: true
            });
        });
    });

    // Particle system for the contact form
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById('contact').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();

            particle.x += particle.dx;
            particle.y += particle.dy;

            if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
        });
        requestAnimationFrame(drawParticles);
    }

    drawParticles();
});