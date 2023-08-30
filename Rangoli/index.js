
  
/* When the user clicks on the button1, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show"); 
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show"); 
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown1 = document.getElementById("myDropdown1");
    if (myDropdown1.classList.contains('show')) {
      myDropdown1.classList.remove('show');
    }
    
    
    var myDropdown2 = document.getElementById("myDropdown2");
    if (myDropdown2.classList.contains('show')) {
      myDropdown2.classList.remove('show');
    }
    
    var myDropdown3 = document.getElementById("myDropdown3");
    if (myDropdown3.classList.contains('show')) {
      myDropdown3.classList.remove('show');
    
  }
}

}
