// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Space background
    VANTA.NET({
        el: "#space-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fffe,
        backgroundColor: 0x0a0a0a,
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
        'Stellar Computing', 'Neural Architecture', 'Galactic Networks', 'AR/VR', 'AI',
        'Rust', 'Go', 'Python', 'WebAssembly', 'Solidity',
        'TensorFlow', 'Unreal Engine', 'Cosmic Chains', 'Kubernetes', 'GraphQL',
        'Stellar Algorithms', 'Parallel Realities', 'Time Dilation', 'Reality Augmentation', 'Dimensional Engineering'
    ];

    const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true
    };

    TagCloud(container, texts, options);

    // Cosmic field animation
    const cosmicFields = document.querySelectorAll('.cosmic-field');
    cosmicFields.forEach(field => {
        gsap.to(field, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });
    });

    // Space warp effect on hover for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                duration: 0.3
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: '0 0 0 rgba(255, 0, 255, 0)',
                duration: 0.3
            });
        });
    });

    // Starfield background for the contact form
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById('contact').appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";

        for (let i = 0, x = stars.length; i < x; i++) {
            let s = stars[i];

            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.stroke();
        }

        ctx.beginPath();
        for (let i = 0, x = stars.length; i < x; i++) {
            let starI = stars[i];
            ctx.moveTo(starI.x,starI.y); 
            if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
            for (let j = 0, y = stars.length; j < y; j++) {
                let starII = stars[j];
                if(distance(starI, starII) < 150) {
                    ctx.lineTo(starII.x,starII.y); 
                }
            }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }

    function distance( point1, point2 ){
        let xs = 0;
        let ys = 0;

        xs = point2.x - point1.x;
        xs = xs * xs;

        ys = point2.y - point1.y;
        ys = ys * ys;

        return Math.sqrt( xs + ys );
    }

    // Update star locations
    function update() {
        for (let i = 0, x = stars.length; i < x; i++) {
            let s = stars[i];

            s.x += s.vx / 30;
            s.y += s.vy / 30;

            if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
            if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
    }

    // Mouse movement
    let mouse = {
        x: 0,
        y: 0
    };

    function handleMouseMove(event) {
        mouse.x = event.clientX || event.touches[0].clientX;
        mouse.y = event.clientY || event.touches[0].clientY;
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleMouseMove);

    // Update canvas size on window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Animation loop
    function animate() {
        update();
        drawStars();
        requestAnimationFrame(animate);
    }

    animate();
});