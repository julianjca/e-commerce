// Get the modal
const modal = document.getElementById('cart');

// Get the button that opens the modal
const btn = document.getElementById("shopping-nav");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   console.log("masuk")
//     if (event.target !== modal || event.target != btn) {
//         modal.style.display = "none";
//     }
// };

const closeBtn = document.getElementById("close");

closeBtn.onclick = ()=>{
  modal.style.display = "none";
}