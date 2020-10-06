const fontSizeInput = document.getElementById('font-size')
const fontFamilyInput = document.getElementById('font-family')
const fontColorInput = document.getElementById('font-color')
const backgroundColorInput = document.getElementById('background-color')
const textInput = document.getElementById('text-input')

fontSizeInput.addEventListener('input', update)
fontFamilyInput.addEventListener('input', update)
fontColorInput.addEventListener('input', update)
backgroundColorInput.addEventListener('input', update)
textInput.addEventListener('input', update)

const textPreview = document.getElementById('display')

const displayFontSize = document.getElementById('show-size')
const displayFontFamily = document.getElementById('show-font')
const displayFontColor = document.getElementById('show-color')
const displayBackgroundColor = document.getElementById('show-bg-color')

function update() {
    textPreview.style.fontSize = `${fontSizeInput.value}px`
    textPreview.style.fontFamily = fontFamilyInput.value
    textPreview.style.color = fontColorInput.value
    textPreview.style.backgroundColor = backgroundColorInput.value
    textPreview.textContent = textInput.value

    displayFontSize.textContent = fontSizeInput.value
    displayFontFamily.textContent = fontFamilyInput.value
    displayFontColor.textContent = fontColorInput.value
    displayBackgroundColor.textContent = backgroundColorInput.value

}