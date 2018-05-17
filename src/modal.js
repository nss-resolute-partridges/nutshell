// Get the modal
const modal = $("#myModal");

// Get the button that opens the modal
const btn = $("#myBtn");

// Get the <span> element that closes the modal
const span = $(".close")[0];

// When the user clicks on the button, open the modal
btn.click = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.click = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.click = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}