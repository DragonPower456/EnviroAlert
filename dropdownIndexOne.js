/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function indexDropdownMenuOne() {
    document.getElementById("indexDropdownOne").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var indexDropdownOne = document.getElementById("indexDropdownOne");
      if (indexDropdownOne.classList.contains('show')) {
        indexDropdownOne.classList.remove('show');
      }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function indexDropdownMenuTwo() {
    document.getElementById("indexDropdownTwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var indexDropdownTwo = document.getElementById("indexDropdownTwo");
      if (indexDropdownTwo.classList.contains('show')) {
        indexDropdownTwo.classList.remove('show');
      }
  }
}