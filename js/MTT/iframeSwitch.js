function Elements(build, all) {
    if (all) {
        return document.querySelectorAll(build)
    } else if (!all) {
        return document.querySelector(build)
    }
}

const buttons = Elements("#Leiste a", true)
const iframeÜberblick = Elements("#ÜberblickScreen")
const iframeRechner = Elements("#Rechner")


function switcher(target, msg) {
    if (msg === "toÜberblick") {
        iframeÜberblick.style.display = "block"
        iframeRechner.style.display = "none"
    } else if (msg === "toRechner") {
        iframeRechner.style.display = "block"
        iframeÜberblick.style.display = "none"
    }
}
function msger(target) {
    if (target.classList.contains("Überblick")) {
        return "toÜberblick"
    } else if (target.classList.contains("Rechner")) {
        return "toRechner"
    }
}

for (let button of buttons) {
    button.addEventListener("click", function(e) {
        switcher(e.currentTarget, msger(e.currentTarget))
    })
}