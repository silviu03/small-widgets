let flight = document.getElementById('flight-type');
let departureFlight = document.getElementById('departure');
let returnFilght = document.getElementById('return');
let submitBtn = document.getElementById('submit');

departureFlight.disabled = true;
returnFilght.disabled = true;

flight.addEventListener('change', function (e) {
    departureFlight.disabled = false;
    if (e.target.value === "one-way-flight") {
        returnFilght.disabled = true;
    } else {
        returnFilght.disabled = false;
    }
})

submitBtn.addEventListener('click', function () {
    if (returnFilght.disabled === true) {
        alert("You have booked a one way flight on " + departureFlight.value)
    } else if(returnFilght.disabled === false) {
        alert("You have booked a one way flight on " + departureFlight.value + " & returning on " + returnFilght.value)
    }
});