/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function windowDropdownMenuOne() {
    document.getElementById("windowDropdownOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var windowDropdownOne = document.getElementById("windowDropdownOne");
      if (windowDropdownOne.classList.contains('show')) {
        windowDropdownOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function windowDropdownMenuTwo() {
    document.getElementById("windowDropdownTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var windowDropdownTwo = document.getElementById("windowDropdownTwo");
      if (windowDropdownTwo.classList.contains('show')) {
        windowDropdownTwo.classList.remove('show');
      }
  }
}