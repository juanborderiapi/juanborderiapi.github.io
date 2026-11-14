// ==============================================================
// EJEMPLO 3: THE INVESTIGATIVE DOCUMENTALIST - JAVASCRIPT
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
    initFilmGrainToggle();
    initAudioWaveformPlayer();
    initReaderDrawer();
});

// --- 1. Film Grain Toggle ---
function initFilmGrainToggle() {
    const btn = document.getElementById('toggle-grain-btn');
    const layer = document.getElementById('film-grain-layer');
    if (!btn || !layer) return;

    btn.addEventListener('click', () => {
        layer.classList.toggle('disabled');
        const isDisabled = layer.classList.contains('disabled');
        btn.textContent = isDisabled ? '🎞️ Grano: OFF' : '🎞️ Grano: ON';
    });
}

// --- 2. Interactive Audio Waveform Player ---
function initAudioWaveformPlayer() {
    const playBtn = document.getElementById('wave-play-btn');
    const timer = document.getElementById('wave-timer');
    const barsContainer = document.getElementById('waveform-bars');
    if (!playBtn || !timer || !barsContainer) return;

    // Generate 45 waveform bars with realistic heights
    const barHeights = [
        12, 18, 26, 32, 18, 14, 28, 36, 40, 24, 16, 22, 34, 38, 28,
        18, 30, 42, 35, 20, 15, 25, 38, 30, 22, 18, 32, 40, 26, 14,
        20, 36, 32, 18, 24, 38, 42, 28, 20, 16, 28, 34, 22, 14, 8
    ];

    barsContainer.innerHTML = barHeights.map((h, i) => `
        <div class="waveform-bar" data-index="${i}" style="height: ${h}px;"></div>
    `).join('');

    const bars = barsContainer.querySelectorAll('.waveform-bar');
    let isPlaying = false;
    let currentIdx = 0;
    let playInterval = null;

    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playBtn.innerHTML = '❚❚';
            playInterval = setInterval(() => {
                if (currentIdx < bars.length) {
                    bars[currentIdx].classList.add('played');
                    currentIdx++;
                    const secs = Math.floor((currentIdx / bars.length) * 165); // 2:45 total
                    const m = Math.floor(secs / 60);
                    const s = (secs % 60).toString().padStart(2, '0');
                    timer.textContent = `0${m}:${s} / 02:45`;
                } else {
                    currentIdx = 0;
                    bars.forEach(b => b.classList.remove('played'));
                }
            }, 100);
        } else {
            playBtn.innerHTML = '▶';
            clearInterval(playInterval);
        }
    });

    // Seek on bar click
    bars.forEach((bar, idx) => {
        bar.addEventListener('click', () => {
            currentIdx = idx;
            bars.forEach((b, i) => {
                if (i <= idx) b.classList.add('played');
                else b.classList.remove('played');
            });
            const secs = Math.floor((currentIdx / bars.length) * 165);
            const m = Math.floor(secs / 60);
            const s = (secs % 60).toString().padStart(2, '0');
            timer.textContent = `0${m}:${s} / 02:45`;
        });
    });
}

// --- 3. Slide-Over Reader Drawer ---
function initReaderDrawer() {
    const overlay = document.getElementById('reader-drawer-overlay');
    const closeBtn = document.getElementById('drawer-close-btn');
    const triggerLinks = document.querySelectorAll('.open-reader-drawer');
    if (!overlay || !closeBtn) return;

    triggerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeDrawer() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDrawer();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeDrawer();
    });
}
