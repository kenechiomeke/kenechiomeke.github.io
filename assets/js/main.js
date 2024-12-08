// Project filtering and search
document.addEventListener('DOMContentLoaded', function() {
    // Project search functionality
    const searchInput = document.getElementById('project-search');
    if(searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const projects = document.querySelectorAll('.project-card');
            
            projects.forEach(project => {
                const text = project.textContent.toLowerCase();
                project.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // Image gallery modal
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close').onclick = function() {
                modal.remove();
            }
            
            modal.onclick = function(e) {
                if(e.target === modal) modal.remove();
            }
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Progress bar for long-form content
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});