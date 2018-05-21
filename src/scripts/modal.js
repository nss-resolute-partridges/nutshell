// // Get the modal
// const modal = $("#myModal");

// // Get the button that opens the modal
// // const btn = $("#myBtn");

// // Get the <span> element that closes the modal
// const span = $(".close")[0];

// // When the user clicks on the button, open the modal
$(function() {
    $("#myBtn").click(function() {
        $("#myModal").toggleClass("modal")
    })
})

$(function() {
    $("#myBtnTwo").click(function() {
        $("#myModalTwo").toggleClass("modal")
    })
})



// // When the user clicks on <span> (x), close the modal
// $(".close").onclick = function() {
//     $("#myModal").style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target === modal) {
//         $("#myModal").style.display = "none";
//     }
// }