const heightInput = document.getElementById("height")
const weightInput = document.getElementById("weight")
const outputSpan = document.getElementById("output")

const valBase10 = /^[0-9]+$/i

heightInput.addEventListener("change", () => {
    updateOutput()
})

weightInput.addEventListener("change", () => {
    updateOutput()
})

updateOutput()

function updateOutput() {
    const weight = weightInput.value
    const height = heightInput.value
    let output = ""
    if(valBase10.test(height) && valBase10.test(weight)) {
        output = `BMI: ${Math.floor(10 * (weight / ((height / 100) * (height / 100)))) / 10}`
    }
    if(!valBase10.test(height)) {
        output = "Please enter a valid height"
    }
    if(!valBase10.test(weight)) {
        if(!(output == "")) output = output + " and weight"
        if(output == "") output = "Please enter a valid weight"
    }
    outputSpan.innerText = output
}