
let buttonPlay = document.querySelector(".play");

buttonPlay.addEventListener("click", function () {
    buttonPlay.classList.add("hide");
    document.querySelector(".pause").classList.remove("hide")
})