const screen = document.querySelector(".section_firstdiv_p")
screen.innerText = ''
console.dir();

function btn(a) {
    if (a === "." && screen.innerText === "") {
        screen.innerText = "0."
    } else {
        screen.innerText = screen.innerText + a
    }
}
function rst() {
    screen.innerText = ''
}
function del() {
    screen.innerText.sclice(0, -1)
}
function operators(op) {
    if (screen.innerText === "") {
        screen.innerText === screen.innerText
    } else if (
        screen.innerText.at(-1) === "+" ||
        screen.innerText.at(-1) === "-" ||
        screen.innerText.at(-1) === "*" ||
        screen.innerText.at(-1) === "/"
    ) {
        screen.innerText = screen.innerText.slice(0, -1) + op
    } else {
        screen.innerText = screen.innerText + op
    }
}
function tolia() {
    screen.innerText = eval(screen.innerText)
}