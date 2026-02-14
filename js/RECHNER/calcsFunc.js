const buttons = document.querySelectorAll("#Rechner button")
const screen = document.querySelector("#Rechner .screen")
const legal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", ":", "x"]
const input = document.querySelector("#Rechner .screen")


function logik(target, msg) {
    if (msg === "normal") {
        if (target.textContent != "=" && target.textContent != "<" && target.textContent != "C") {
            screen.value += target.textContent
        } else if (target.textContent === "=") {
            screen.value = solve(screen.value)
        } else if (target.textContent === "C") {
            screen.value = ""
        } else if (target.textContent === "<") {
            screen.value = screen.value.slice(0, -1)
        }
    } else if (msg === "kbm") {
        if (legal.includes(target)) {
            screen.value += target
        } else if (target === "Backspace") {
            screen.value = screen.value.slice(0, -1)
        } else if (target === "c") {
            screen.value = ""
        } else if (target === "Enter") {
            screen.value = solve(screen.value)
        }
    }
}
function solve(value) {
    let x = value.replace("x", "*")
    return eval(x.replace(":", "/"))
}

for (let button of buttons) {
    button.addEventListener("click", function(e) {
        logik(e.currentTarget, "normal")
    })
}

input.addEventListener("keydown", function(e) {
    e.preventDefault()
    logik(e.key, "kbm")
})