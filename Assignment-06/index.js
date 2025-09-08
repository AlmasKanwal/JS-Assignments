// Nav Fixed Start 

const navbar = document.getElementById('mainNavbar');
const navLogo = document.getElementById('navLogo');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        navbar.classList.add('fixed-nav');
        navLogo.src = "./assets/orange-logo.png";
    } else {
        navbar.classList.remove('fixed-nav');
        navLogo.src = "./assets/white-logo.png";
    }
});

//  Nav Fixed End 

// Search Flow Image Start 

const steps = document.querySelectorAll(".step");
const previewImage = document.getElementById("preview-image");

steps.forEach(step => {
    ["mouseenter", "click"].forEach(evt => {
        step.addEventListener(evt, () => {
            // Remove old active
            steps.forEach(s => s.classList.remove("active"));

            // Add active on current
            step.classList.add("active");

            // Image switch with fade
            const imgSrc = step.getAttribute("data-img");
            previewImage.style.opacity = 0;
            setTimeout(() => {
                previewImage.src = imgSrc;
                previewImage.style.opacity = 1;
            }, 200);
        });
    });
});
//  Search Flow Image End 


// Discount Slider Section Start
let slideIndex = 0;
var slider = document.getElementsByClassName("slide");

function showSlides(n) {
    if (n >= slider.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slider.length - 1 }
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
    }
    slider[slideIndex].classList.add("active");
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

showSlides(slideIndex);
// Discount Slider Section End