function animateCounter(id, target) {
  const element = document.getElementById(id);
  if (!element) return;

  let count = 0;
  const increment = Math.ceil(target / 100);

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    element.textContent = count;
  }, 20);
}

document.addEventListener('DOMContentLoaded', () => {
  animateCounter('cars-count', 150);
  animateCounter('customers-count', 1200);
  animateCounter('brands-count', 25);
});
