// export function slideInOnScroll() {
//   const elements = document.querySelectorAll('.slide-in');
//   elements.forEach(element => {
//     const elementTop = element.getBoundingClientRect().top;
//     const elementBottom = element.getBoundingClientRect().bottom;
//     const screenHeight = window.innerHeight;
//     if (elementTop < screenHeight && elementBottom >= 0) {
//       element.classList.add('show');
//     }
//   });
// }

// export function addScrollListener() {
//   window.addEventListener('scroll', slideInOnScroll);
// }


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
