export function slideInOnLoad() {
  const element = document.querySelector('.slide-in');
  element.style.opacity = 0;
  element.style.transform = 'translateX(-110%)';
  element.style.transitionDuration = '2s';

  setTimeout(() => {
    element.style.opacity = 1;
    element.style.transform = 'translateX(0)';
  }, 1000);
}
