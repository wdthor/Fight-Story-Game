let startBtn = document.querySelector("#play");
let startPage = document.querySelector("#start-page");
let contentHouse = document.querySelector(".content");
let house = document.querySelector("#house");

startBtn.addEventListener("click", function () {
    startPage.classList.add("remove-background");
    startPage.addEventListener("animationend", function () {
        startPage.style.display = "none";
        contentHouse.style.display = "block";
    });
});

// while (house.style.display === "block") {
//     document.addEventListener("keypress", function () {
//         if (event.keyCode == 13) {
//             console.log("enter");

//         }
//     });
// }
