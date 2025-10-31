// Example: you might add lazy‑loading or simple animations
document.addEventListener('DOMContentLoaded', function() {
  const imgs = document.querySelectorAll('.gallery img');
  imgs.forEach(img => {
    img.style.opacity = 0;
    img.onload = () => {
      img.style.transition = 'opacity 0.5s ease‑in';
      img.style.opacity = 1;
    };
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
const galleryImgs = document.querySelectorAll('.gallery img');
galleryImgs.forEach(img => img.classList.add('fade-in'));
