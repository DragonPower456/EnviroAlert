/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function caseDropdownMarchMenuOne() {
    document.getElementById("caseDropdownMarchOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var caseDropdownMarchOne = document.getElementById("caseDropdownMarchOne");
      if (caseDropdownMarchOne.classList.contains('show')) {
        caseDropdownMarchOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function caseDropdownMarchMenuTwo() {
    document.getElementById("caseDropdownMarchTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var caseDropdownMarchTwo = document.getElementById("caseDropdownMarchTwo");
      if (caseDropdownMarchTwo.classList.contains('show')) {
        caseDropdownMarchTwo.classList.remove('show');
      }
  }
}