const voltageInput = document.getElementById("voltage")
const currentInput = document.getElementById("current")
const resistanceInput = document.getElementById("resistance")
const powerInput = document.getElementById("power")
const ampsMenu = document.getElementById("amps-menu")
const ohmsMenu = document.getElementById("ohms-menu")

voltageInput.addEventListener("input", updateCalculator)
currentInput.addEventListener("input", updateCalculator)
resistanceInput.addEventListener("input", updateCalculator)
powerInput.addEventListener("input", updateCalculator)
ampsMenu.addEventListener("input", updateCalculator)
ohmsMenu.addEventListener("input", updateCalculator)


function updateCalculator() {
    voltage = parseFloat(voltageInput.value)
    current = parseFloat(currentInput.value)

    if (ampsMenu.value == "milliamps") {
        current /= 1000
    }

    resistance = voltage / current
    power = voltage * current

    if (ohmsMenu.value == "ohms") {
        resistanceInput.value = resistance.toFixed(2)
    } else {
        resistanceInput.value = (resistance / 1000).toFixed(4)
    }
    powerInput.value = power.toFixed(3)
}