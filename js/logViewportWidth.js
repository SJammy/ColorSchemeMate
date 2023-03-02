export function logViewportWidth() {
  window.addEventListener("resize", () => {
    const viewportWidth = window.innerWidth;
    console.log(`Viewport width is ${viewportWidth}px`);
  });
}
