const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip")
const peopleInput = document.querySelector("#people")

const displayTip = document.querySelector("#display-tip")
const displayTotal = document.querySelector("#display-total")

function calculateTip() {
    const billValue = parseInt(billInput.value)
    const tipValue = parseInt(tipInput.value)
    const peopleValue = parseInt(peopleInput.value)

    const tipAmount = billValue * tipValue / 100 / peopleValue
    const total = (billValue + tipAmount) / peopleValue

    displayTip.innerHTML = `Tip per person: ${tipAmount.toFixed(2)}`
    displayTotal.innerHTML = `Total per person: ${total.toFixed(2)}`
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)



calculateTip()