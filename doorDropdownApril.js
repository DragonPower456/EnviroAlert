/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function doorDropdownMenuOne() {
    document.getElementById("doorDropdownOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var doorDropdownOne = document.getElementById("doorDropdownOne");
      if (doorDropdownOne.classList.contains('show')) {
        doorDropdownOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function doorDropdownMenuTwo() {
    document.getElementById("doorDropdownTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var doorDropdownTwo = document.getElementById("doorDropdownTwo");
      if (doorDropdownTwo.classList.contains('show')) {
        doorDropdownTwo.classList.remove('show');
      }
  }
}