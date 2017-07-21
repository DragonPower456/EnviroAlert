/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function windowDropdownFebMenuOne() {
    document.getElementById("windowDropdownFebOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var windowDropdownFebOne = document.getElementById("windowDropdownFebOne");
      if (windowDropdownFebOne.classList.contains('show')) {
        windowDropdownFebOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function windowDropdownFebMenuTwo() {
    document.getElementById("windowDropdownFebTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var windowDropdownFebTwo = document.getElementById("windowDropdownFebTwo");
      if (windowDropdownFebTwo.classList.contains('show')) {
        windowDropdownFebTwo.classList.remove('show');
      }
  }
}