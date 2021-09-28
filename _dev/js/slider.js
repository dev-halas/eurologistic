var currentSlide = 1;
let timeVar;

// pobieram wszystkie zdjęcia
const slides = document.getElementsByClassName("hero-slide");
const buttons = document.querySelectorAll(".sliderCounter--number");

// tutaj jest większość logiki
function showSlide(slideIndex) {

  if (slideIndex > slides.length) {
    currentSlide = 1;
  }
  if (slideIndex < 1) {
    currentSlide = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[currentSlide - 1].classList.add('active');

}


// funkcja do dodawania klasy do buttonu
const getButton = (target) => {
  buttons.forEach((element) => {
    if (element.classList.contains("--active")) {
      element.classList.remove("--active");
    }
    target.classList.add("--active");
  });
};

// logika interwału zdjęć
const initialDelay = () => {
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  getButton(buttons[currentSlide]);
  currentSlide++;
  showSlide(currentSlide);
};
clearInterval(timeVar);
timeVar = setInterval(initialDelay, 7000);


// event na klikanie buttonu
buttons.forEach((el) => {
  el.addEventListener("click", function (e) {
    
    window.clearInterval(timeVar);
    getButton(e.currentTarget);
    currentSlide = parseInt(e.currentTarget.textContent);
    showSlide(currentSlide);
    timeVar = setInterval(initialDelay, 7000);

  });
});

// wywołanie
window.onload = function () {
  showSlide(currentSlide);
};