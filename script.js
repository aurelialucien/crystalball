const box = document.querySelector('.sparkles');
for (let i = 0; i < 18; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  const angle = Math.random() * Math.PI * 2;
  const radius = 12 + Math.random() * 34;
  sparkle.style.left = `${50 + Math.cos(angle) * radius}%`;
  sparkle.style.top = `${50 + Math.sin(angle) * radius}%`;
  sparkle.style.animationDelay = `${Math.random() * -3}s`;
  box.appendChild(sparkle);
}

const ball = document.getElementById('ball');
const wish = document.getElementById('wish');

function makeWish() {
  ball.classList.add('flash');
  wish.classList.add('show');
  window.clearTimeout(ball._flashTimer);
  ball._flashTimer = window.setTimeout(() => ball.classList.remove('flash'), 420);
}

ball.addEventListener('click', makeWish);
ball.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    makeWish();
  }
});
