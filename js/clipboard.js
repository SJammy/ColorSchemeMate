// import { saveAs } from 'file-saver'
// import jsPDF from 'jspdf';


function copyObjectToClipboard(obj) {
  // Convert object to JSON string
  const jsonString = JSON.stringify(obj)

  // Copy JSON string to clipboard
  navigator.clipboard
    .writeText(jsonString)
    .then(() => {
      console.log('Object copied to clipboard')
    })
    .catch((err) => {
      console.error('Error copying object to clipboard:', err)
    })
}


function saveObjectAsPDF(obj, filename) {
  // Convert object to JSON string
  const jsonString = 'Colour Scheme Mate \n ' + JSON.stringify(obj)

  // Create PDF document
  const doc = new jsPDF()
  doc.setFontSize(12)
  doc.text(jsonString, 20,20, {maxWidth:170} )

  // Save PDF to file
  doc.save(`${filename}.pdf`)
}

export {
  copyObjectToClipboard,
  saveObjectAsPDF
}
