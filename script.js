// Simple optional animation to rotate text in the hero section
const heroHeadline = document.querySelector('.hero h1');
let angle = 0;
function rotate() {
  angle = (angle + 0.5) % 360;
  heroHeadline.style.transform = `rotateY(${angle}deg)`;
  requestAnimationFrame(rotate);
}

if (heroHeadline) {
  rotate();
}
