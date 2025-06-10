document.addEventListener('DOMContentLoaded', function() {
    // Project card expand/collapse functionality
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Prevent collapse when clicking on links
            if (event.target.closest('.btn') || event.target.tagName === 'A') {
                event.stopPropagation();
                return;
            }
            
            // Close any other open cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('expanded')) {
                    otherCard.classList.remove('expanded');
                }
            });
            
            // Toggle this card
            this.classList.toggle('expanded');
        });
    });
});