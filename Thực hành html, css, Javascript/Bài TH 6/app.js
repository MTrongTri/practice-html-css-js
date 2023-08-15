var eKey = document.querySelector(".key")
var eLocation = document.querySelector(".location")
var eWhich = document.querySelector(".which")
var eCode = document.querySelector(".code")
var result = document.querySelector(".result")
var alertElement = document.querySelector(".alert")
var resultBoxElement = document.querySelector(".box")

document.addEventListener("keydown", function(e) {
   alertElement.classList.add("hide");
   resultBoxElement.classList.remove("hide")
   result.innerHTML = e.which;
   eKey.children[1].innerHTML = e.keyCode;
   eLocation.children[1].innerHTML = e.location;
   eWhich.children[1].innerHTML = e.which;
   eCode.children[1].innerHTML = e.code;
})