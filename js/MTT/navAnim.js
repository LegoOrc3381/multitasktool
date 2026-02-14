const navButtons = document.querySelectorAll("main #NavLeiste #Leiste a")


function anim(target) {
    for (let button of navButtons) {
        button.classList.remove("active")
        button.classList.add("unactive")
    }
    target.classList.remove("unactive")
    target.classList.add("active")
}

for (let button of navButtons) {
    button.addEventListener("click", function(e) {
        anim(e.currentTarget)
    })
}