// ==============================================================
// EJEMPLO FLAGSHIP: SCROLL-DRIVEN CINEMA REVOLUTION
// GSAP 3 + ScrollTrigger + Lenis Smooth Scroll Engine
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initHeroIrisZoom();
    initHorizontalTimelineReel();
    initStackedCardsParallax();
    initScrollTimecodeHUD();
});

// --- 1. Lenis Smooth Momentum Scroll ---
let lenis = null;

function initSmoothScroll() {
    if (typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('Librerías de animación no cargadas. Modo degradado.');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    lenis = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

// --- 2. Hero Pinned Iris Zoom on Scroll ---
function initHeroIrisZoom() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const heroWrap = document.querySelector('.hero-scroll-trigger-wrapper');
    const iris = document.querySelector('.hero-iris-container');
    const headline = document.querySelector('.hero-cinematic-headline');
    const scrollCue = document.querySelector('.hero-scroll-cue');

    if (!heroWrap || !iris) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heroWrap,
            start: 'top top',
            end: '+=120%',
            pin: true,
            scrub: 1.2,
            anticipatePin: 1
        }
    });

    // Animar la apertura de diafragma / zoom cinematográfico
    tl.to(headline, {
        y: -100,
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: 'power2.inOut'
    }, 0)
    .to(scrollCue, {
        opacity: 0,
        duration: 0.2
    }, 0)
    .to(iris, {
        width: '92vw',
        height: '84vh',
        borderRadius: '16px',
        duration: 1,
        ease: 'power2.inOut'
    }, 0.2);
}

// --- 3. Horizontal Pinned Timeline Reel (Premiere Track Scrubbing) ---
function initHorizontalTimelineReel() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.querySelector('#horizontal-portfolio');
    const track = document.querySelector('.horizontal-track');
    const giantNumbers = document.querySelectorAll('.panel-giant-number');

    if (!section || !track) return;

    function getScrollWidth() {
        return -(track.scrollWidth - window.innerWidth + 120);
    }

    // Pin horizontal principal
    gsap.to(track, {
        x: getScrollWidth,
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${track.scrollWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    // Parallax adicional en los números gigantes
    giantNumbers.forEach(num => {
        gsap.to(num, {
            x: -80,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${track.scrollWidth}`,
                scrub: 1.5
            }
        });
    });

    // Inclinación por velocidad (Velocity Skew) durante el scroll
    if (lenis) {
        lenis.on('scroll', (e) => {
            const skew = Math.max(-3, Math.min(3, e.velocity * 0.05));
            gsap.to('.horizontal-panel', {
                skewX: skew,
                duration: 0.25,
                ease: 'power1.out',
                overwrite: 'auto'
            });
        });
    }
}

// --- 4. Stacked 3D Cards in Journalism Section ---
function initStackedCardsParallax() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const cards = document.querySelectorAll('.stacked-card-item');
    if (!cards.length) return;

    cards.forEach((card, i) => {
        if (i < cards.length - 1) {
            const nextCard = cards[i + 1];
            gsap.to(card, {
                scale: 0.92,
                filter: 'blur(3px) brightness(0.55)',
                y: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: nextCard,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 0.8
                }
            });
        }
    });
}

// --- 5. Scroll Progress & Virtual Timecode HUD ---
function initScrollTimecodeHUD() {
    const fill = document.getElementById('scroll-progress-fill');
    const tcEl = document.getElementById('floating-tc-val');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;

        if (fill) {
            fill.style.width = `${progress * 100}%`;
        }

        if (tcEl) {
            // Calcular código de tiempo virtual de 00:00:00:00 a 00:05:42:24
            const totalFrames = Math.floor(progress * (5 * 60 * 25 + 42 * 25));
            const frames = (totalFrames % 25).toString().padStart(2, '0');
            const totalSecs = Math.floor(totalFrames / 25);
            const seconds = (totalSecs % 60).toString().padStart(2, '0');
            const minutes = (Math.floor(totalSecs / 60) % 60).toString().padStart(2, '0');
            const hours = '00';
            tcEl.textContent = `${hours}:${minutes}:${seconds}:${frames}`;
        }
    });
}
