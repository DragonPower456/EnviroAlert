/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
    document.getElementById("mainDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var mainDropdown = document.getElementById("mainDropdown");
      if (mainDropdown.classList.contains('show')) {
        mainDropdown.classList.remove('show');
      }
  }
}