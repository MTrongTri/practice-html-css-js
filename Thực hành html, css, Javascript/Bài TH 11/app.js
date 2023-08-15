var upload = document.querySelector('#my-picture')
var preview = document.querySelector('.preview')

upload.addEventListener('change', function(e) {
    var file = upload.files[0]

    if(!file) {
        return
    }
    if(!file.name.endsWith('.jpg')) {
        alert('Hình ảnh phải có định dạng Jpg')
        return
    }

    var img = document.createElement('img')
    img.src = URL.createObjectURL(upload.files[0])
    preview.appendChild(img);
})