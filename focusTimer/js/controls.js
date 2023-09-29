export function Controls({
    buttonPlay,
    buttonPause,
    buttonSoundOff,
    buttonSoundOn,
    buttonSet,
    buttonStop
}){


    function play() {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove("hide");
        buttonSet.classList.add("hide");
        buttonStop.classList.remove("hide");
    }

    function pause() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add("hide");
    }

    function reset() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
        buttonStop.classList.add("hide")
        buttonSet.classList.remove("hide")
    }
    function somOn() {
        buttonSoundOn.classList.add("hide");
        buttonSoundOff.classList.remove("hide");
    }
    function somOff() {
        buttonSoundOff.classList.add("hide");
        buttonSoundOn.classList.remove("hide");
    }

    function getMinutes() {
        let newMinutes = prompt("Quantos Minutos ?");
        if (!newMinutes) {
            return false
        }
        return newMinutes
        
    }

    return {
        reset,
        play,
        pause,
        somOn,
        somOff, 
        getMinutes

    }
}
