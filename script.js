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

    // Skills animation
    gsap.from('.skill', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        }
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
});