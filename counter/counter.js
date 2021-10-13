let inputNumber = document.getElementById('number');
let countBtn = document.getElementById('btn');

countBtn.addEventListener('click', function () {
    let a = parseInt(inputNumber.value);
    inputNumber.value = ++a;
})