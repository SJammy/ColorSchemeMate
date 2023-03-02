function showInfoOverlay() {
  var openBtn = document.getElementById('color-picker-info-open')
  var overlay = document.getElementById('overlay')
  var closeBtn = document.getElementById('color-picker-info-close')

  openBtn.addEventListener('click', function () {
    overlay.style.display = 'block'
    overlay.style.opacity = 1
  })

  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none'
    overlay.style.opacity = 0
  })
}

export { showInfoOverlay }
