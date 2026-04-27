const sparkleContainer = document.querySelector(".sparkles");

for (let i = 0; i < 20; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.width = `${Math.random() * 6 + 2}px`;
  sparkle.style.height = sparkle.style.width;

  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;

  sparkle.style.animationDelay = `${Math.random() * 2}s`;

  sparkleContainer.appendChild(sparkle);
}
