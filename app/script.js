const noBtn = document.querySelector("[data-no]")
const yesBtn = document.querySelector("[data-yes]")
const mainText = document.querySelector("h1") 
let attempts = 0;
const messages = [
    "Tentando de novo?",
    "Não se preocupa, continua tentando, um dia da certo!",
    "Ótima ideia, vamos tentar clicar no botão que foge em vez do que está parado",
    "Se tem algo que funciona, claramente não é insistir no erro",
    "Pode continuar, ta dando certinho",
    "Vai, confia, eu tenho certeza que uma hora você consegue!",
    "Você quer tanto assim um coreano?"
]

noBtn.addEventListener("mouseenter", () => {
    btnMouseEvent()
})

noBtn.addEventListener("click", () => {
    btnMouseEvent()
})

yesBtn.addEventListener("click", () => {
    window.open("../aceito.html", "_self")
})

function btnMouseEvent() {
    let xMax = window.innerWidth;
    let yMax = window.innerHeight;
    let btnLoc = noBtn.getBoundingClientRect()
    
    let x = 0
    let y = 0
    
    x = Math.floor(Math.random() * (xMax - btnLoc.width))
    y = Math.floor(Math.random() * (yMax - btnLoc.height))
    
    noBtn.style.position = "absolute"
    noBtn.style.left = x + "px"
    noBtn.style.top = y + "px"

    noBtn.style.transition = `transition: top ${random(300, 500) + "ms"} ease, left ${random(300, 500) + "ms"} ease;`

    sendMessage()
    
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function sendMessage() {
    switch (attempts) {
        case 0:
            mainText.innerHTML = "Oooooia"
            attempts++
            break
        case 1:
            mainText.innerHTML = "Foi um erro, né?"
            attempts++
            break
        default:
            let oldText = mainText.innerHTML
            do {
                mainText.innerHTML = messages[Math.floor(Math.random() * messages.length)]
            } while (oldText == mainText.innerHTML)
    }
}