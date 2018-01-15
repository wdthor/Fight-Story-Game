let startBtn = document.querySelector("#play");
let startPage = document.querySelector("#start-page");


startBtn.addEventListener("click", function() {
    startPage.classList.add("remove-background");
    startPage.addEventListener("animationend", function() {
        startPage.style.display = "none";
    });
});
