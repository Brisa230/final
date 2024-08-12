var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}

// script.js

// JavaScript para mostrar el texto al hacer scroll
window.addEventListener('scroll', function() {
  const textContainer = document.getElementById('text-container');
  const scrollPosition = window.scrollY;

  // Cambia '200' a la posición de scroll deseada
  if (scrollPosition > 200) {
      textContainer.classList.remove('hidden');
      textContainer.classList.add('visible');
  } else {
      textContainer.classList.remove('visible');
      textContainer.classList.add('hidden');
  }
});
