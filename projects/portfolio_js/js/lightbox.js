// 1. Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

// 2. Portfolio data
const portfolioItems = [
    { src: 'project1-full.jpg', title: 'Project 1', desc: 'Description 1' },
    { src: 'project2-full.jpg', title: 'Project 2', desc: 'Description 2' },
    { src: 'project3-full.jpg', title: 'Project 3', desc: 'Description 3' },
];
let currentIndex = 0;

// 3. Open lightbox
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 4. Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// 5. Update content
function updateLightboxContent() {
    const item = portfolioItems[currentIndex];
    lightboxImg.src = item.src;
    lightboxTitle.textContent = item.title;
}

// 6. Navigation
function nextImage() {
    currentIndex = (currentIndex + 1) % portfolioItems.length;
    updateLightboxContent();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    updateLightboxContent();
}

// 7. Event listeners
document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        openLightbox(parseInt(trigger.dataset.index));
    });
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// 8. Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// 9. Click outside to close
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});