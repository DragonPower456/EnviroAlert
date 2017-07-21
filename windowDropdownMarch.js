/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function windowDropdownMarchMenuOne() {
    document.getElementById("windowDropdownMarchOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var windowDropdownMarchOne = document.getElementById("windowDropdownMarchOne");
      if (windowDropdownMarchOne.classList.contains('show')) {
        windowDropdownMarchOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function windowDropdownMarchMenuTwo() {
    document.getElementById("windowDropdownMarchTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var windowDropdownMarchTwo = document.getElementById("windowDropdownMarchTwo");
      if (windowDropdownMarchTwo.classList.contains('show')) {
        windowDropdownMarchTwo.classList.remove('show');
      }
  }
}