var images = [
    "/assets/pizza.jpg",
    "/assets/chicken-shashlik.jpg",
    "/assets/chowmein.jpg",
    "/assets/rice-shahshlik.jpg",
    "/assets/paratha.jpg",
    "/assets/biryani.jpg",
    "/assets/fries.jpg",
    "/assets/kabab-roti.jpg"
];

var sliderImage = document.getElementById("slider-image");
var thumbsContainer = document.getElementById("thumbnails");
var allThumbnails = []
var currentIndex = 0;

for (var i = 0; i < images.length; i++) {
    var thumb = document.createElement("img");
    thumb.src = images[i];
    thumb.setAttribute("onclick", "activeThumb(" + i + ")");
    thumbsContainer.appendChild(thumb);
    allThumbnails.push(thumb)
}

function showImage() {
    sliderImage.src = images[currentIndex];

    for (var i = 0; i < allThumbnails.length; i++) {
        allThumbnails[i].className = "";
    }

    allThumbnails[currentIndex].className = "active";
}

function next() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showImage();
}

function prev() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    showImage();
}

function activeThumb(index) {
    currentIndex = index;
    showImage();
}

showImage();


