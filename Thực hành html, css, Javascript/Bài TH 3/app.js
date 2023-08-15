const openModal = document.querySelector(".open-modal-btn button")
const bg = document.querySelector(".modal__bg")
const modal = document.querySelector(".modal")
const close = document.querySelectorAll(".close")

openModal.addEventListener("click", function() {
    bg.classList.add("show")
    modal.classList.add("show__modal")
})


for(let i= 0; i< close.length; i++) {
    close[i].addEventListener("click", function() {
        bg.classList.remove("show")
        modal.classList.remove("show__modal")
    })
}

