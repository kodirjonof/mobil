var savol = document.querySelector('#ask-question');
var overlay = document.querySelector('#overlay');
var modalwindow = document.querySelector('#modal');
var burger11 = document.querySelector('#burger');
var burger22 = document.querySelector('#burger2');
var burger33 = document.querySelector('#burger3');
var closex = document.querySelector('#click');
var body = document.querySelector('body')


savol.addEventListener('click', function() {
  modalwindow.classList.toggle('open')
  overlay.classList.toggle('all')
  burger11.classList.toggle('bur')
  burger22.classList.toggle('bur2')
  burger33.classList.toggle('bur3')
   closex.classList.toggle('opened')
   body.classList.add('active')
});




closex.addEventListener('click', function() {
   modalwindow.classList.remove('open')
   body.classList.remove('active')
  modalwindow.classList.remove('opened')
  overlay.classList.toggle('all')
  overlay.classList.remove('visible')
});