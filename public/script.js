document.addEventListener('DOMContentLoaded', () => {
  const sky = document.querySelector('.sky');

  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${1 + Math.random() * 3}s`;
    star.style.opacity = Math.random();
    sky.appendChild(star);
  }
});
