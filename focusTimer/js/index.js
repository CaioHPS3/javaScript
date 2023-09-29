import { Controls } from "./controls.js"
import { Timer } from "./timer.js"

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSoundOff,
    buttonSoundOn,
    buttonSet,
    buttonStop
})
// Criando um Objeto que vai ser passado como parametro, com todas as dependencia que
// meu escopo de "timer" vai precisar para funcionar.
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
});


buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countdown();
})
buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
})
buttonStop.addEventListener("click", () => {
    controls.reset();
    // * clearTimerout para o que estiver la dentro
    timer.reset();
})
buttonSoundOn.addEventListener("click", () => {
    controls.somOn();
})

buttonSoundOff.addEventListener("click", () => {
    controls.somOff();
})

buttonSet.addEventListener("click", () => {
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
        timer.resetTimer();
        return
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes)
})