var btn = document.querySelectorAll('button'),
    toasts = document.querySelector('.toasts');

btn.forEach((item) => {
        item.addEventListener('click', function() {
        var toast = createToast(item.getAttribute('class'));
        toasts.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 'slide_hide 2s linear';
            setTimeout(() => {
                toast.remove();
            }, 2000);
        }, 2000);
    })
})

function createToast(status) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(`toast-${status}`);
    if(status === 'success') {
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i>
        <span class="massage">This is a success</span>
        <div class="countdown"></div>
        `
    }
    else if(status === 'warning') {
        toast.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>
        <span class="massage">This is a warning</span>
        <div class="countdown"></div>
        `
    }
    else {
        toast.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>
        <span class="massage">This is a erro</span>
        <div class="countdown"></div>
        `
    }

    return toast;
}


{/* <div class="toast toast-success">
<i class="fa-solid fa-circle-check"></i>
<span class="massage">This is a success</span>
<div class="countdown"></div>
</div>

<div class="toast toast-warning">
<i class="fa-solid fa-circle-exclamation"></i>
<span class="massage">This is a warning</span>
<div class="countdown"></div>
</div>

<div class="toast toast-erro">
<i class="fa-solid fa-triangle-exclamation"></i>
<span class="massage">This is a erro</span>
<div class="countdown"></div>
</div>
 */}
