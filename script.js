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


const thumbnail1 = document.querySelector(".thumbnail1");
const fullSize1ImageURL = "pictures/BK6A3596.jpg";

thumbnail1.addEventListener("click", function() {
    window.open(fullSize1ImageURL, "pictures/BK6A3596.jpg");
});

const thumbnail2 = document.querySelector(".thumbnail2");
const fullSize2ImageURL = "pictures/BK6A3557.jpg";

thumbnail2.addEventListener("click", function() {
    window.open(fullSize2ImageURL, "pictures/BK6A3557.jpg");
});

const thumbnail3 = document.querySelector(".thumbnail3");
const fullSize3ImageURL = "pictures/BK6A3528.jpg";

thumbnail3.addEventListener("click", function() {
    window.open(fullSize3ImageURL, "pictures/BK6A3528.jpg");
});









