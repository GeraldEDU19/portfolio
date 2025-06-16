document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (event.target.closest('.btn') || event.target.tagName === 'A') {
                event.stopPropagation();
                return;
            }
            
            projectCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('expanded')) {
                    otherCard.classList.remove('expanded');
                }
            });
            
            this.classList.toggle('expanded');
        });
    });
});