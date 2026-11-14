// ==============================================================
// EJEMPLO 1: THE DIRECTOR'S SUITE - JAVASCRIPT
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
    initCinemaCursor();
    initSpotlightCards();
    initHeroTimecode();
    initAmbilightModal();
});

// --- 1. Custom Magnetic Cinema Cursor ---
function initCinemaCursor() {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const dot = document.createElement('div');
    dot.className = 'cinema-cursor-dot';

    const ring = document.createElement('div');
    ring.className = 'cinema-cursor-ring';
    ring.innerHTML = '<span>Ver Corte ↗</span>';

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Spring interpolation loop for smooth trailing ring
    function renderCursor() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Context badges on hover
    const videoTargets = document.querySelectorAll('.video-card, .highlight-card, .dossier-preview-link');
    videoTargets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.classList.add('hovering-card');
        });
        el.addEventListener('mouseleave', () => {
            ring.classList.remove('hovering-card');
        });
    });

    const linkTargets = document.querySelectorAll('a, button, .filter-btn, .contact-card');
    linkTargets.forEach(el => {
        if (!el.closest('.video-card') && !el.closest('.highlight-card')) {
            el.addEventListener('mouseenter', () => ring.classList.add('hovering-link'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hovering-link'));
        }
    });
}

// --- 2. Dynamic Spotlight Cards (Mouse Coordinates) ---
function initSpotlightCards() {
    const cards = document.querySelectorAll('.spotlight-card');
    if (!cards.length) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// --- 3. Running Hero Timecode (25 fps Premiere Clock) ---
function initHeroTimecode() {
    const tcEl = document.getElementById('hero-timecode');
    if (!tcEl) return;

    let frames = 18;
    let seconds = 24;
    let minutes = 1;
    let hours = 0;

    setInterval(() => {
        frames++;
        if (frames >= 25) {
            frames = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        const fStr = frames.toString().padStart(2, '0');
        const sStr = seconds.toString().padStart(2, '0');
        const mStr = minutes.toString().padStart(2, '0');
        const hStr = hours.toString().padStart(2, '0');
        tcEl.textContent = `${hStr}:${mStr}:${sStr}:${fStr}`;
    }, 40); // 25 fps = 40ms interval
}

// --- 4. Ambilight Backdrop Glow for Modal ---
function initAmbilightModal() {
    const modalContent = document.getElementById('modal-content');
    if (!modalContent) return;

    // Observe modal mutations to wrap iframe with ambilight glow
    const observer = new MutationObserver(() => {
        if (modalContent.children.length > 0 && !modalContent.querySelector('.ambilight-wrapper')) {
            const inner = modalContent.innerHTML;
            modalContent.innerHTML = `
                <div class="ambilight-wrapper">
                    <div class="ambilight-glow"></div>
                    <div class="ambilight-inner">${inner}</div>
                </div>
            `;
        }
    });

    observer.observe(modalContent, { childList: true });
}
