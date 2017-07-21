/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function caseDropdownFebMenuOne() {
    document.getElementById("caseDropdownFebOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var caseDropdownFebOne = document.getElementById("caseDropdownFebOne");
      if (caseDropdownFebOne.classList.contains('show')) {
        caseDropdownFebOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function caseDropdownFebMenuTwo() {
    document.getElementById("caseDropdownFebTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var caseDropdownFebTwo = document.getElementById("caseDropdownFebTwo");
      if (caseDropdownFebTwo.classList.contains('show')) {
        caseDropdownFebTwo.classList.remove('show');
      }
  }
}