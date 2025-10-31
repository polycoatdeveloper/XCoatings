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

