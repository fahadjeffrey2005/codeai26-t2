// Demo JS for background effects (optional, can be extended)
// Currently no JS animation, but you can add particle, GIF, or canvas effects here.

// Example: Add a subtle parallax effect to the gradient background
const bg = document.getElementById('background-demo');
window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  bg.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// Diagonal smooth gradient: animate stops for soft blend
let lastStop = 40;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function ease(t) {
  // Smooth cubic ease
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function updateGradient() {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  let percent = docHeight > 0 ? scrollY / docHeight : 0;
  // White expands from 40% to 80% as you scroll, blend zone follows
  let stop = lerp(40, 80, ease(Math.min(percent, 1)));
  lastStop += (stop - lastStop) * 0.18;
  const blendStart = Math.max(0, lastStop);
  const blendEnd = Math.min(100, lastStop + 20);
  bg.style.background = `linear-gradient(135deg, #fff 0%, #fff ${blendStart}%, #e5d6f3 ${blendEnd}%, #9678b6 100%)`;
  requestAnimationFrame(updateGradient);
}

window.addEventListener('scroll', () => {});
window.addEventListener('resize', () => {});
updateGradient();
