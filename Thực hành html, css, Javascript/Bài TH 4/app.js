var img = document.querySelectorAll(".img img")
var prev = document.querySelector(".prev")
var next = document.querySelector(".right")
var close = document.querySelector(".close")
var gallery = document.querySelector(".gallery")
var galleryImg = document.querySelector(".gallery__inner img")

var currentIndex = 0;
function showGallery() {

    if(currentIndex == 0) {
        prev.classList.add("hide")
    }
    else {
        prev.classList.remove("hide")
    }

    if(currentIndex == img.length - 1) {
        next.classList.add("hide")
    }
    else {
        next.classList.remove("hide")
    }
    galleryImg.src = img[currentIndex].src
    gallery.classList.add("show")
}
img.forEach((item, index) => {
    item.addEventListener("click", function() {
        currentIndex = index;
        showGallery();
    })
}) 

close.addEventListener("click", function() {
    gallery.classList.remove("show")
})

prev.addEventListener("click", function() {
    if(currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener("click", function() {
    if(currentIndex < img.length - 1) {
        currentIndex++;
        showGallery();
    }
})

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove("show")
    }
})

