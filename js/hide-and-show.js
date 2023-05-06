// Hide the top section and show the footer section
function hideTopAndShowSections() {
  const hideTopShowButton = document.getElementById('color-picker-close') 
  const sectionTop = document.getElementById('section-top') 
  const sectionFooter = document.getElementById('section-footer') 

  hideTopShowButton.addEventListener('click', () => { 
    sectionTop.style.display = 'none' 
    sectionFooter.style.display = 'block' 
  })
}

// Hide the footer section and show the top section
function hideFooterAndShowSections() {
  const hideBottomShowButton = document.getElementById('color-picker-open') 
  const sectionTop = document.getElementById('section-top') 
  const sectionFooter = document.getElementById('section-footer') 

  hideBottomShowButton.addEventListener('click', () => {
    sectionTop.style.display = 'block' 
    sectionFooter.style.display = 'none' 
  })
}


export { hideTopAndShowSections, hideFooterAndShowSections }
