var valueInput = document.querySelector(".content input");
var listContensElement = document.querySelector(".content ul");
var removeBtn = document.querySelector(".remove-all");
var indexItem = 1;
valueInput.addEventListener("change", function() {
    var valueContent = valueInput.value;  
    listContensElement.innerHTML += `<li class = "item${indexItem}" onclick = "removeTag(${indexItem})">
    ${valueContent}
    <i class="fa-solid fa-xmark"></i>
    </li>`;
    indexItem++;
    resetInput();
})

removeAllTag();

function resetInput() {
    var parentInputElement = valueInput.parentElement;
    valueInput.remove();
    valueInput.value = "";
    parentInputElement.appendChild(valueInput);
    valueInput.focus();
}

function removeTag(indexItem) {
    document.querySelector(`.item${indexItem}`).remove();
}

function removeAllTag() {
    removeBtn.addEventListener("click", function() {
        listContensElement.innerHTML = "";
    })
}
