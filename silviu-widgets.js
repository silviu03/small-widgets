let locationBtn = document.getElementsByClassName("locationBtn");
let inputLocation = document.getElementById("input-location");

for(i = 0; i < locationBtn.length; i++) {
    let locationInput = locationBtn[i];
    locationInput.addEventListener('click', function() {
        inputLocation.setAttribute("src", locationInput.dataset.location);
    });
}


