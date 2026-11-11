// === FILTER SYSTEM (RACE-CONDITION FREE) ===
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            const matches = filter === 'all' || card.dataset.category === filter;
            if (matches) {
                card.style.display = 'flex';
                requestAnimationFrame(() => {
                    card.classList.add('visible');
                });
            } else {
                card.classList.remove('visible');
                card.style.display = 'none';
            }
        });
    });
});

// === SCROLL REVEAL ANIMATION ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    scrollObserver.observe(card);
});

// === COUNTER ANIMATION ===
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            counter.textContent = Math.floor(progress * target);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    });
}

const statsSection = document.querySelector('.stats-section');
let counterAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            animateCounters();
        }
    });
}, { threshold: 0.4 });

if (statsSection) counterObserver.observe(statsSection);

// === LIGHTBOX MODAL ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxUrl = document.getElementById('lightbox-url');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxTags = document.getElementById('lightbox-tags');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentLightboxIndex = 0;
let visibleCards = [];

function getVisibleCards() {
    return Array.from(projectCards).filter(card => card.style.display !== 'none');
}

function openLightbox(index) {
    visibleCards = getVisibleCards();
    if (visibleCards.length === 0) return;
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const card = visibleCards[currentLightboxIndex];
    if (!card) return;

    const img = card.querySelector('.project-image img');
    const title = card.querySelector('.project-title');
    const desc = card.querySelector('.project-description');
    const tags = card.querySelector('.project-tags');
    const extLink = card.querySelector('.project-external-url');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxTitle.textContent = title ? title.textContent : '';
    lightboxDescription.textContent = desc ? desc.textContent : '';
    lightboxTags.innerHTML = tags ? tags.innerHTML : '';

    if (lightboxUrl) {
        if (extLink) {
            lightboxUrl.innerHTML = `<a href="${extLink.href}" target="_blank" rel="noopener noreferrer">${extLink.href} &nearr;</a>`;
            lightboxUrl.style.display = 'block';
        } else {
            lightboxUrl.innerHTML = '';
            lightboxUrl.style.display = 'none';
        }
    }
}

function nextSlide() {
    if (visibleCards.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % visibleCards.length;
    updateLightboxContent();
}

function prevSlide() {
    if (visibleCards.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + visibleCards.length) % visibleCards.length;
    updateLightboxContent();
}

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        visibleCards = getVisibleCards();
        const index = visibleCards.indexOf(card);
        if (index !== -1) {
            openLightbox(index);
        }
    });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxNext) lightboxNext.addEventListener('click', nextSlide);
if (lightboxPrev) lightboxPrev.addEventListener('click', prevSlide);

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// === SCROLL TO TOP ===
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
