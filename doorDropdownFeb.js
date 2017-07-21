/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function doorDropdownFebMenuOne() {
    document.getElementById("doorDropdownFebOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var doorDropdownFebOne = document.getElementById("doorDropdownFebOne");
      if (doorDropdownFebOne.classList.contains('show')) {
        doorDropdownFebOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function doorDropdownFebMenuTwo() {
    document.getElementById("doorDropdownFebTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var doorDropdownFebTwo = document.getElementById("doorDropdownFebTwo");
      if (doorDropdownFebTwo.classList.contains('show')) {
        doorDropdownFebTwo.classList.remove('show');
      }
  }
}