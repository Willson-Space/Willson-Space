$(document).ready(function() {
  // Agregar la clase "activo" al enlace de navegación actual, para resaltarlo
  $('nav a[href="'+location.href+'"]').addClass('activo');

  // Desplazarse suavemente al hacer clic en un enlace de navegación
  $('nav a').on('click', function(evento) {
    if (this.hash !== '') {
      evento.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
      	window.location.hash = hash;
      });
    }
  });
});

function animateNav(event) {
  event.preventDefault();
  var targetId = event.target.getAttribute('href');
  var targetSection = document.querySelector(targetId);
  targetSection.classList.add('animated');

  setTimeout(function() {
    targetSection.classList.remove('animated');
  }, 500);
}

function scrollToSection(event) {
  event.preventDefault();

  var targetId = event.target.getAttribute('href');
  var targetSection = document.querySelector(targetId);

  if (targetSection) {
    var offsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    targetSection.classList.add('animated');

    setTimeout(function() {
      targetSection.classList.remove('animated');
    }, 500);
  }
}
