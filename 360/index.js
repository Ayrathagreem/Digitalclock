
let slideIndex = 0;

const slides = document.querySelector(".slides");
const originalImages = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dots span");

const firstClone = originalImages[0].cloneNode(true);
slides.appendChild(firstClone);

const totalSlides = originalImages.length;

let autoSlide;
let isPaused = false;


// Display slide
function showSlide(index) {

    slideIndex = index;

    slides.style.transition = "transform 1s ease-in-out";

    slides.style.transform =
        `translateX(-${slideIndex * 100}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove("active"));

    if (slideIndex < totalSlides) {
        dots[slideIndex].classList.add("active");
    } else {
        dots[0].classList.add("active");
    }
}


// Handle infinite forward movement
slides.addEventListener("transitionend", function () {

    if (slideIndex === totalSlides) {

        slides.style.transition = "none";

        slideIndex = 0;

        slides.style.transform = "translateX(0)";
    }
});


// Next and previous
function changeSlide(value) {

    if (slideIndex === totalSlides) return;

    let nextIndex = slideIndex + value;

    if (nextIndex < 0) {
        nextIndex = totalSlides - 1;
    }

    showSlide(nextIndex);
}


// Dot navigation
function currentSlide(index) {
    showSlide(index);
}


// Automatic sliding
function startSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        changeSlide(1);

    }, 3000);
}


// Pause and play
function toggleSlide() {

    const button = document.getElementById("pauseBtn");

    if (isPaused) {

        startSlide();

        button.innerHTML = "⏸ Pause";

        isPaused = false;

    } else {

        clearInterval(autoSlide);

        button.innerHTML = "▶ Play";

        isPaused = true;
    }
}


// Start
showSlide(0);
startSlide();
