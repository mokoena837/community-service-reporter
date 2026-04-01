// Subtle interactions for refined design
document.addEventListener('DOMContentLoaded', function() {
    
    // Form submission with subtle feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type=\"submit\"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class=\"spinner\"></span> SUBMITTING';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }, 5000);
            }
        });
    });
    
    // Live search with debounce
    let searchTimeout;
    const searchInput = document.getElementById('searchReports');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.toLowerCase();
                const reportCards = document.querySelectorAll('.report-card');
                
                reportCards.forEach(card => {
                    const text = card.innerText.toLowerCase();
                    if (text.includes(searchTerm)) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        setTimeout(() => { card.style.opacity = '1'; }, 10);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, 300);
        });
    }
    
    // Photo preview with subtle animation
    const photoInput = document.getElementById('photo');
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    let preview = document.getElementById('photo-preview');
                    if (!preview) {
                        preview = document.createElement('div');
                        preview.id = 'photo-preview';
                        preview.className = 'photo-preview';
                        photoInput.parentNode.appendChild(preview);
                    }
                    preview.style.opacity = '0';
                    preview.innerHTML = '<img src=\"' + event.target.result + '\" alt=\"Preview\">';
                    setTimeout(() => { preview.style.opacity = '1'; }, 50);
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Form validation with subtle messages
    const reportForm = document.querySelector('form');
    if (reportForm) {
        reportForm.addEventListener('submit', function(e) {
            const category = this.querySelector('[name=\"category\"]').value;
            const location = this.querySelector('[name=\"location\"]').value;
            const description = this.querySelector('[name=\"description\"]').value;
            
            if (!category || !location || !description) {
                e.preventDefault();
                const errorMsg = document.createElement('div');
                errorMsg.className = 'message';
                errorMsg.style.borderLeftColor = '#ff6b6b';
                errorMsg.textContent = 'Please fill in all required fields.';
                this.insertBefore(errorMsg, this.firstChild);
                setTimeout(() => errorMsg.remove(), 3000);
            }
        });
    }
    
    // Add subtle hover effect to cards
    const cards = document.querySelectorAll('.report-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});
