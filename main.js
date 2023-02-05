const toBinary = (decimalNumber) => {
    if (decimalNumber == 0) return "0"
    let remainder = []
    while (decimalNumber > 1) {
        remainder.push(decimalNumber % 2)
        decimalNumber = Math.floor(decimalNumber / 2)
    }
    remainder.push(1)
    return remainder.reverse().join("")
}

const toDecimal = (binaryNumber) => {
    const digits = String(binaryNumber).split("").reverse()
    let sum = 0
    let counter = 1
    digits.forEach(e => {
        if (Number(e) !== 0) sum = sum + counter
        counter = counter * 2
    })
    return sum
}

const formBinary = document.getElementById("formBinary")
const resultBinary = document.getElementById("resultBinary")
formBinary.addEventListener("submit", e => {
    e.preventDefault()
    let number = Number(e.target[0].value)
    resultBinary.innerText = `${number} is ${toBinary(number)} in binary`
})

const formDecimal = document.getElementById("formDecimal")
const resultDecimal = document.getElementById("resultDecimal")
formDecimal.addEventListener("submit", e => {
    e.preventDefault()
    let number = Number(e.target[0].value)
    resultDecimal.innerText = `${number} is ${toDecimal(number)} in decimal`
})