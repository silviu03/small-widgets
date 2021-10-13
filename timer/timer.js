let slider = document.getElementById('slider');
let timer = document.getElementById('timer');
let resetBtn = document.getElementById('btn');
let autoFill = document.getElementById('auto-fill');

timer.innerHTML = slider.value + "s";

slider.oninput = (function (e) {
    autoFill.style = "";
    timer.innerHTML = this.value + "s";
    timer.dataset.id = this.value;
    autoFill.style = `background-color: black; animation: progress-animation ${timer.dataset.id}s forwards;`
});
resetBtn.addEventListener('click', function () {
    autoFill.style = "";
    timer.dataset.id = slider.value;
    setTimeout(() => {
        autoFill.style = `background-color: black; animation: progress-animation ${timer.dataset.id}s forwards;`
    }, 500);
})

