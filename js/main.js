const projects = [
    // === PRODUCCIÓN PROPIA (Grabación + Montaje + Producción) ===
    { id: 'ILr6aVEausI', title: 'Resumen Galardones Alter Christus 2025', role: 'Regnum Christi España · Grabación, edición y producción', category: 'produccion', platform: 'youtube' },
    { id: 'lZiSt-EwxYI', title: 'Entrevista Padre Daniel: «Romper tus planes»', role: 'Regnum Christi España · Grabación, edición y producción', category: 'produccion', platform: 'youtube' },
    { id: 'D3cMDm1j9wY', title: 'Historia de Superación Personal', role: 'Producción audiovisual · Creación y montaje', category: 'produccion', platform: 'youtube' },

    // === EDICIÓN Y POSTPRODUCCIÓN ===
    { id: 'gxQ6BIMZY9U', title: 'Plan de Misión 2024–2027 en Madrid', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'eugu_8fjzeY', title: 'Ecos de la Audiencia: Jessica Mendieta', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '0DjWuAS02aY', title: 'Ecos de la Audiencia: María Isabel Kerdel', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'DvOGafQY0W4', title: 'Ecos de la Audiencia: Maida Ureta', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '5onfCbZ80Yc', title: 'Ecos de la Audiencia: Betty Rivera', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '_NbB1N3U9bQ', title: 'Ecos de la Audiencia: Jeanette Díaz', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'bhpokneN90E', title: 'Ecos de la Audiencia: Glory Darbellay', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'BU3GOcBMoT0', title: 'Convención Local Madrid 2025: Hacer presente el Reino', role: 'Regnum Christi España · Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '3cz9E_F6Lko', title: 'Alter Christus Especial DANA: Homenaje a 62 sacerdotes', role: 'Regnum Christi España · Edición y locución', category: 'edicion', platform: 'youtube' },

    // === LOCUCIÓN Y VOZ EN OFF ===
    { id: 'mV0vAHHyeuA', title: 'Alter Christus 2025: J. A. Crespo y F. Requena', role: 'Regnum Christi España · Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'MyoT6U6FsG4', title: 'Alter Christus 2025: Emili Marlés', role: 'Regnum Christi España · Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'codr3tqjFfM', title: 'Alter Christus 2025: Nicanor Martínez García', role: 'Regnum Christi España · Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'nReNGofoTRw', title: 'Alter Christus 2025: Miguel David Pozo León', role: 'Regnum Christi España · Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: '5LKUW_xVyEw', title: 'Alter Christus 2025: Jordi Domènech', role: 'Regnum Christi España · Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'vMPbj9NqJ4k', title: 'Alter Christus 2025: Rufino García Antón', role: 'Regnum Christi España · Locución y voz en off', category: 'locucion', platform: 'youtube' },

    // === INSTAGRAM / REDES SOCIALES ===
    { url: 'https://www.instagram.com/p/DXwwzqcoBd5/', img: '1.jpg', id: 'DXwwzqcoBd5', title: 'Entrevista Padre Daniel | Reel', role: 'Regnum Christi España · Edición para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DV5lGVZiHgW/?img_index=5', img: '2.jpg', id: 'DV5lGVZiHgW', title: 'Vocaciones & Testimonios | Reel', role: 'Regnum Christi España · Edición para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DWCDF24iN9v/', img: '3.jpg', id: 'DWCDF24iN9v', title: 'Cobertura JMJ Cascais: Heaven Spoiler', role: 'Regnum Christi España · Edición para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DWEK4PoCMMD/', img: '4.jpg', id: 'DWEK4PoCMMD', title: 'Campaña Día de San José', role: 'Regnum Christi España · Creatividad & RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DVDaXBBCCZM/?img_index=5', img: '5.jpg', id: 'DVDaXBBCCZM', title: 'Campaña I Domingo de Cuaresma', role: 'Regnum Christi España · Creatividad & RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DU5IPfUiF59/?img_index=3', img: '6.jpg', id: 'DU5IPfUiF59', title: 'Campaña Vocacional «Busco algo más»', role: 'Regnum Christi España · Creatividad & RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DUndxKsCGaF/', img: '7.jpg', id: 'DUndxKsCGaF', title: 'Campaña Día del Enfermo «Cuidar»', role: 'Regnum Christi España · Creatividad & RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DUS9IsmiMfx/', img: '8.jpg', id: 'DUS9IsmiMfx', title: 'Audiencia con el Papa en Roma | Reel', role: 'Regnum Christi España · Edición para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DRXynKYiEXt/', img: '9.jpg', id: 'DRXynKYiEXt', title: 'Campaña Cristo Rey «Llamados»', role: 'Regnum Christi España · Creatividad & RRSS', category: 'rrss', platform: 'instagram' }
];

document.addEventListener('DOMContentLoaded', () => {
    renderVideoGrid();
    initFilters();
    initModal();
    initNavbar();
});

function renderVideoGrid() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => {
        let thumbContent;
        if (project.platform === 'youtube') {
            thumbContent = `<img src="https://img.youtube.com/vi/${project.id}/hqdefault.jpg" alt="${project.title}" loading="lazy">`;
        } else {
            const igImg = project.img || `ig_${project.id}.jpg`;
            thumbContent = `<div class="instagram-thumb">
                <img src="assets/img/ig/${igImg}" alt="${project.title}" loading="lazy">
            </div>`;
        }

        const playSvg = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

        return `
            <article class="video-card" data-category="${project.category}" data-id="${project.id}" data-platform="${project.platform}">
                <div class="video-thumb">
                    ${thumbContent}
                    <div class="play-icon">${playSvg}</div>
                </div>
                <div class="video-info">
                    <div class="video-title">${project.title}</div>
                    <div class="video-role">${project.role}</div>
                </div>
            </article>
        `;
    }).join('');
}

function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
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
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close');

    if (!overlay) return;

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.video-card, .highlight-card');
        if (!card) return;

        const id = card.dataset.id;
        const platform = card.dataset.platform;

        if (platform === 'youtube') {
            content.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            `;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else if (platform === 'instagram') {
            const proj = projects.find(p => p.id === id);
            if (proj && proj.url) {
                window.open(proj.url, '_blank');
            }
        }
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        overlay.classList.remove('active');
        content.innerHTML = '';
        document.body.style.overflow = '';
    }
}

function initNavbar() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
        });
    });
}
