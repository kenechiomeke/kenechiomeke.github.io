document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
 
    // Animate elements
    document.querySelectorAll('.project-card, .skill-card, .publication-item, .timeline-item')
        .forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
 
    // Enhanced project search with animations
    const searchInput = document.getElementById('project-search');
    if(searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const projects = document.querySelectorAll('.project-card');
            
            projects.forEach(project => {
                const text = project.textContent.toLowerCase();
                if(text.includes(searchTerm)) {
                    project.style.display = 'block';
                    project.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    project.style.animation = 'fadeOut 0.5s ease forwards';
                    setTimeout(() => project.style.display = 'none', 500);
                }
            });
        });
    }
 
    // Enhanced image gallery modal
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                    <div class="modal-navigation">
                        <button class="prev">&#10094;</button>
                        <button class="next">&#10095;</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            setTimeout(() => {
                modal.classList.add('show');
                modal.querySelector('.modal-content').classList.add('show');
            }, 10);
 
            // Image navigation
            const allImages = Array.from(galleryImages);
            let currentIndex = allImages.indexOf(this);
 
            modal.querySelector('.prev').onclick = function() {
                currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
                updateModalImage(modal, allImages[currentIndex]);
            };
 
            modal.querySelector('.next').onclick = function() {
                currentIndex = (currentIndex + 1) % allImages.length;
                updateModalImage(modal, allImages[currentIndex]);
            };
 
            // Close modal with animation
            const closeModal = () => {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            };
 
            modal.querySelector('.close').onclick = closeModal;
            modal.onclick = (e) => {
                if(e.target === modal) closeModal();
            };
 
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if(e.key === 'Escape') closeModal();
                if(e.key === 'ArrowLeft') modal.querySelector('.prev').click();
                if(e.key === 'ArrowRight') modal.querySelector('.next').click();
            });
        });
    });
 
    // Enhanced smooth scroll with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
 
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
 
    // Enhanced progress bar with gradient
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
 
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = `${scrolled}%`;
                progressBar.style.background = `linear-gradient(to right, #2563eb ${scrolled}%, transparent)`;
                ticking = false;
            });
            ticking = true;
        }
    });
 
    // Typed.js effect for headings (if you include Typed.js library)
    if (typeof Typed !== 'undefined' && document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: ['AI Researcher', 'Data Scientist', 'Climate Tech Expert'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
 });
 
 function updateModalImage(modal, img) {
    const modalImg = modal.querySelector('.modal-content img');
    modalImg.style.opacity = '0';
    setTimeout(() => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalImg.style.opacity = '1';
    }, 300);
 }