document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.id = 'particles';
  document.body.appendChild(container);

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (5 + Math.random() * 10) + 's';
    container.appendChild(particle);
  }
});
