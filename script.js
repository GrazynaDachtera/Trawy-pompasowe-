function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let counter = 0;
const size = images[0].clientWidth;

slider.style.transform = "translateX(" + (-size * counter) + "px)";

setInterval(() => {
    if (counter < images.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
}, 4000);



