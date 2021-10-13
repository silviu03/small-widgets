let celsius = document.getElementById('Celsius');
let fahrenheit = document.getElementById('Fahrenheit');

celsius.addEventListener('keyup', CtoF)
function CtoF(e) {
    fahrenheit.value = (celsius.value *1.8) + 32;
}
fahrenheit.addEventListener('keyup', FtoC)
function FtoC(e) {
    celsius.value = (fahrenheit.value - 32) / 1.8;
}

