/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function doorDropdownMarchMenuOne() {
    document.getElementById("doorDropdownMarchOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var doorDropdownMarchOne = document.getElementById("doorDropdownMarchOne");
      if (doorDropdownMarchOne.classList.contains('show')) {
        doorDropdownMarchOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function doorDropdownMarchMenuTwo() {
    document.getElementById("doorDropdownMarchTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var doorDropdownMarchTwo = document.getElementById("doorDropdownMarchTwo");
      if (doorDropdownMarchTwo.classList.contains('show')) {
        doorDropdownMarchTwo.classList.remove('show');
      }
  }
}