// ==============================================================
// EJEMPLO 2: KINETIC POST-PRODUCTION STUDIO - JAVASCRIPT
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
    initTimelineTracks();
    initScrubBars();
});

// --- Timeline Multi-Track Filter Handling ---
function initTimelineTracks() {
    const buttons = document.querySelectorAll('.timeline-track-btn');
    const cards = () => document.querySelectorAll('.video-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            if (filter === 'periodismo') {
                const target = document.getElementById('periodismo');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                return;
            }

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            cards().forEach(card => {
                if (filter === 'todos' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// --- Dynamic Scrubbing Bar on Video Cards ---
function initScrubBars() {
    // Add scrub bars to dynamically loaded video cards
    const observer = new MutationObserver(() => {
        const thumbs = document.querySelectorAll('.video-thumb:not(.has-scrub)');
        thumbs.forEach(thumb => {
            thumb.classList.add('has-scrub');
            const scrub = document.createElement('div');
            scrub.className = 'card-scrub-bar';
            scrub.innerHTML = '<div class="card-scrub-progress"></div>';
            thumb.appendChild(scrub);
        });
    });

    const grid = document.getElementById('video-grid');
    if (grid) {
        observer.observe(grid, { childList: true });
    }
}
