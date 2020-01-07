window.sr = ScrollReveal();
        sr.reveal('.anim');


var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("navig");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}
