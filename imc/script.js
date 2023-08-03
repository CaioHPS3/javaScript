import { Modal } from "./modal.js";

// variaveis

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const button = document.querySelector("button");

button.onclick = calculando;

form.onsubmit = (event) => {
    event.preventDefault();
}

function calculando() {
    const weight = inputWeight.value;
    const height = inputHeight.value;

    if (!notNumber(weight) && !notNumber(height)) {
        Modal.messege.innerHTML = `Seu IMC é ${IMC(weight, height)}`;
        Modal.open()
    } else {
        let alert = document.querySelector(".alert-erro");
        alert.classList.toggle("open");
    }

}

function notNumber(value) {
    return isNaN(value) || value === ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

