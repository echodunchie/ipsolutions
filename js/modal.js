// Get the modal
var modal = document.getElementById('sophosModal');
var modal1 = document.getElementById('sangforModal');
var modal2 = document.getElementById('extremeModal');
var modal3 = document.getElementById('acunetixModal');
var modal4 = document.getElementById('motadataModal');
var modal5 = document.getElementById('endpointModal');
var modal6 = document.getElementById('acronisModal');


// Get the button that opens the modal
var btn = document.getElementById("sophos");
var btn1 = document.getElementById("sangfor");
var btn2 = document.getElementById("extreme");
var btn3 = document.getElementById("acunetix");
var btn4 = document.getElementById("motadata");
var btn5 = document.getElementById("endpoint");
var btn6 = document.getElementById("acronis");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks the button, open the modal 
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks the button, open the modal 
btn5.onclick = function() {
  modal5.style.display = "block";
}

btn6.onclick = function() {
  modal6.style.display = "block";
}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
  }
}



