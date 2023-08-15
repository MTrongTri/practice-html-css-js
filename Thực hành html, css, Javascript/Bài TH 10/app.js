var range = document.querySelector('.range');
var process = document.querySelector('.process');
var value = document.querySelector('.process span');
var body = document.querySelector('body');
var heading = document.querySelector('h1');


function updateProcess(percent) {
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft;
    var percent = processWidth/this.offsetWidth * 100;
   percent = Math.round(percent);
   updateProcess(percent);
   body.style.background = `rgba(0, 0, 0, ${percent/100})`;

  if(percent <= 60) {
    heading.style.color = `rgb(${percent}, ${percent}, ${percent})`;
  }
  else {
    heading.style.color = `rgb(calc(${percent}*2.55), calc(${percent}*2.55), calc(${percent}*2.55))`;
  }
})

updateProcess(30)