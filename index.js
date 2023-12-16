let eleLength = document.querySelectorAll("button").length
for (let i = 0; i < eleLength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonClicked = this.innerHTML
        makeSound(buttonClicked)
        buttonAnimation(buttonClicked)

    })
}

document.addEventListener("keypress", function (event) {
    let buttonClicked = event.key
    makeSound(buttonClicked)
    buttonAnimation(buttonClicked)
})

function makeSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('Drums/sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('/sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('/sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('/sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('/sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('/sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log(buttonClicked)
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");

    },100)
}
