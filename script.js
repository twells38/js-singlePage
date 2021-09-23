//write a function what page i want to show
function showPage(page) {
  //querying for all of the  divs which are simulating my pages inside of single page application
  //and for each one of the div we are going to pass it as input into this function which is the argument to forEach
  // for each of the div, we are go ahead and modify its style property
  // setting display equal to none
  document.querySelectorAll("div").forEach(div => {
    div.style.display = "none";
  });
  //get page id that we request
  document.querySelector(`#${page}`).style.display = "block";
}

// attach the addEvenListener to the buttons
// get the buttons work when click on it
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("button").forEach(button => {
    button.onclick = function() {
      //run the showPage function
      showPage(this.dataset.page);
    };
  });
});
