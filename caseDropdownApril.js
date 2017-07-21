/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function caseDropdownMenuOne() {
    document.getElementById("caseDropdownOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var caseDropdownOne = document.getElementById("caseDropdownOne");
      if (caseDropdownOne.classList.contains('show')) {
        caseDropdownOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function caseDropdownMenuTwo() {
    document.getElementById("caseDropdownTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var caseDropdownTwo = document.getElementById("caseDropdownTwo");
      if (caseDropdownTwo.classList.contains('show')) {
        caseDropdownTwo.classList.remove('show');
      }
  }
}