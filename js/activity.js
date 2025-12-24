const modal = document.getElementById("habitModal");
const button = document.querySelector(".button-create");
const closeButton = document.querySelector(".close-modal");

button.onclick = function() {
    modal.style.display = "block";
}
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}