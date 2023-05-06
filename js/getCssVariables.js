// Define a function that gets the CSS variables and returns them in an object
export function getCssVariables() {
  // Create an object to store the CSS variables
  const cssVars = {}

  // Get the stylesheets that contain the :root selector
  const stylesheets = document.querySelectorAll(':root')

  // Loop through each stylesheet
  for (let i = 0; i < stylesheets.length; i++) {
    const stylesheet = stylesheets[i]

    // Get the CSS variables from the stylesheet and store them in the object
    cssVars['color-primary'] =
      getComputedStyle(stylesheet).getPropertyValue('--color-primary')
    cssVars['color-scheme1'] =
      getComputedStyle(stylesheet).getPropertyValue('--color-scheme1')

    cssVars['color-scheme2'] =
      getComputedStyle(stylesheet).getPropertyValue('--color-scheme2')
    cssVars['color-scheme3'] =
      getComputedStyle(stylesheet).getPropertyValue('--color-scheme3')
    cssVars['color-scheme4'] =
      getComputedStyle(stylesheet).getPropertyValue('--color-scheme4')

    cssVars['color-background2'] =
      getComputedStyle(stylesheet).getPropertyValue('-color-background2')
    cssVars['color-text-fade'] =
      getComputedStyle(stylesheet).getPropertyValue('--color-text-fade')
  }

  // Return the cssVars object so it can be used by other modules
  return cssVars
}
