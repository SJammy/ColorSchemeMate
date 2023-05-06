import { getCssVariables } from './getCssVariables.js'
import { slideInOnLoad } from './slide-in.js'
import { saveObjectAsPDF } from './clipboard.js'
import { hideTopAndShowSections, hideFooterAndShowSections } from './hide-and-show.js'
import { showInfoOverlay } from './info-overlay.js'
showInfoOverlay()

document.addEventListener('DOMContentLoaded', () => {
  hideTopAndShowSections()
  hideFooterAndShowSections()
})

document.addEventListener('DOMContentLoaded', () => {
  slideInOnLoad()
})

const cssVars = getCssVariables()

// Get the Input Values
const colorPicker0 = document.getElementById('colorPicker0')
const colorPicker1 = document.getElementById('colorPicker1')
const colorPicker2 = document.getElementById('colorPicker2')
const colorPicker3 = document.getElementById('colorPicker3')
const colorPicker4 = document.getElementById('colorPicker4')
const colorPicker5 = document.getElementById('colorPicker5')
const colorPicker6 = document.getElementById('colorPicker6')

// Set the Input Value to cssVars Color Scheme onMount
colorPicker0.value = cssVars['color-primary']
colorPicker1.value = cssVars['color-scheme1']
colorPicker2.value = cssVars['color-scheme2']
colorPicker3.value = cssVars['color-scheme3']
colorPicker4.value = cssVars['color-scheme4']
colorPicker5.value = cssVars['color-background2']
colorPicker6.value = cssVars['color-text-fade']

// Set values to downloadObject
const newColors = {}
newColors['header-background'] = colorPicker0.value
newColors['header-title'] = colorPicker1.value
newColors['headings-buttons'] = colorPicker2.value
newColors['page-background'] = colorPicker3.value
newColors['paragraph-text'] = colorPicker4.value
newColors['navigation-background'] = colorPicker5.value
newColors['secondary-text'] = colorPicker6.value

// OnChange Set the value of the CSS variable
colorPicker0.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-primary',
    colorPicker0.value
  )
  newColors['header-background'] = colorPicker0.value
  console.log('new Colors:', newColors)
})
colorPicker1.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-scheme1',
    colorPicker1.value
  )
  newColors['header-title'] = colorPicker1.value
})
colorPicker2.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-scheme2',
    colorPicker2.value
  )
  newColors['headings-buttons'] = colorPicker2.value
})
colorPicker3.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-scheme3',
    colorPicker3.value
  )
  newColors['page-background'] = colorPicker3.value
})
colorPicker4.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-scheme4',
    colorPicker4.value
  )
  newColors['paragraph-text'] = colorPicker4.value
})
colorPicker5.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-background2',
    colorPicker5.value
  )
  newColors['navigation-background'] = colorPicker5.value
})
colorPicker6.addEventListener('change', function () {
  document.documentElement.style.setProperty(
    '--color-text-fade',
    colorPicker6.value
  )
  newColors['secondary-text'] = colorPicker6.value
})

const pdfButton = document.querySelector('#color-picker-save')
pdfButton.addEventListener('click', () => {
  saveObjectAsPDF(newColors, 'new-colours')
})

// RESET COLOUR SCHEME
const resetButton = document.querySelector('#color-picker-reset')
resetButton.addEventListener('click', function () {
  // Set the Input Value to cssVars Color Scheme onMount
  colorPicker0.value = cssVars['color-primary']
  colorPicker1.value = cssVars['color-scheme1']
  colorPicker2.value = cssVars['color-scheme2']
  colorPicker3.value = cssVars['color-scheme3']
  colorPicker4.value = cssVars['color-scheme4']
  colorPicker5.value = cssVars['color-background2']
  colorPicker6.value = cssVars['color-text-fade']
})
