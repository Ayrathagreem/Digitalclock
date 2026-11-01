let slideIndex = 0;

const slides = document.querySelector(".slides");
const images = document.querySelector(".slides img");
const dots = document.querySelector(".dots span");

function showSlide(index) {

    if (index >= images.length) {
        slideIndex = 0;
    } 
    else if (index < 0) {
        slideIndex = images.length - 1;
    } 
    else {
        slideIndex = index;
    }

    slides.style.transform =
        `translateX(-${slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));

    dots[slideIndex].classList.add("active");
}

function changeSlide(value) {
    showSlide(slideIndex + value);
}

function currentSlide(index) {
    showSlide(index);
}


setInterval(() => {
    changeSlide(1);
}, 3000);

showSlide(0);