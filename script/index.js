   // Función para agregar la clase 'active' a la opción de navegación activa
   function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentSection = getCurrentSection();

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Función para obtener la sección actual basada en la posición de desplazamiento
  function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute('id');
      }
    });

    return currentSection;
  }

  // Función de desplazamiento suave
  function smoothScroll(event, target) {
    event.preventDefault();
    const element = document.querySelector(target);
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop
    });
  }

  // Evento de desplazamiento para actualizar la opción activa
  window.addEventListener('scroll', setActiveNavLink);



  document.addEventListener("DOMContentLoaded", function() {
var carouselContainer = document.querySelector(".carousel-container");
var carouselCards = document.querySelectorAll(".carousel-card");
var currentIndex = 0;
var cardWidth = carouselContainer.offsetWidth;

function moveCarousel() {
  var position = currentIndex * -cardWidth;
  carouselContainer.style.transform = `translateX(${position}px)`;
}

function updateIndicator() {
  var indicators = document.querySelectorAll(".indicator");
  indicators.forEach(function(indicator, index) {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function handleNext() {
  currentIndex++;
  if (currentIndex >= carouselCards.length) {
    currentIndex = 0;
  }
  moveCarousel();
  updateIndicator();
}

function handlePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselCards.length - 1;
  }
  moveCarousel();
  updateIndicator();
}

var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("prev-button");
nextButton.addEventListener("click", handleNext);
prevButton.addEventListener("click", handlePrev);
});

//typed text
var typed = new Typed('#typed', {
    strings: ['Frontend', 'Backend','FullStack'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
  });


