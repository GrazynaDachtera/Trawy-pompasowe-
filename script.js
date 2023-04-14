function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


const slider1 = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let counter = 0;
const size = images[0].clientWidth;

slider1.style.transform = "translateX(" + (-size * counter) + "px)";

setInterval(() => {
    if (counter < images.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    slider1.style.transform = "translateX(" + (-size * counter) + "px)";
}, 4000);






