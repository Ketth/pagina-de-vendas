// Toggle Menu Function
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

// Dynamic Text and Subtitle Changing
document.addEventListener('DOMContentLoaded', function() {
  const dynamicText = document.getElementById('dynamic-text');
  const dynamicSubtitle = document.getElementById('dynamic-subtitle');
  
  const texts = ['EMPREENDEDOR', 'INFOPRODUTOR', 'INFLUENCIADOR'];
  const subtitles = ['Streaming', 'Checkout', 'Banco', 'Estratégia', 'Busines', 'Editora', 'Eventos', 'Branding', 'Marketing', 'High ticket', 'Negócios digitais', 'Produto Físico'];
  
  let textIndex = 0;
  let subtitleIndex = 0;

  function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    dynamicText.textContent = texts[textIndex];
  }

  function changeSubtitle() {
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    dynamicSubtitle.textContent = `(${subtitles[subtitleIndex]})`;
  }

  setInterval(changeText, 3000); 
  setInterval(changeSubtitle, 1000); 
});

// Slider with Progress Bar and Auto-Slide Carousel
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('#slides');
  const progressBar = document.querySelector('.progress-bar');
  let isDown = false;
  let startX;
  let scrollLeft;
  let slideWidth = slides.querySelector('.slide').offsetWidth;

  function updateProgress() {
    const maxScrollLeft = slides.scrollWidth - slides.clientWidth;
    const progressPercentage = ((slides.scrollLeft / maxScrollLeft) * 90);
    progressBar.style.width = `${progressPercentage}%`;
  }

  slides.addEventListener('mousedown', (e) => {
    isDown = true;
    slides.classList.add('grabbed');
    startX = e.pageX - slides.offsetLeft;
    scrollLeft = slides.scrollLeft;
  });

  slides.addEventListener('mouseleave', () => {
    isDown = false;
    slides.classList.remove('grabbed');
  });

  slides.addEventListener('mouseup', () => {
    isDown = false;
    slides.classList.remove('grabbed');
  });

  slides.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slides.offsetLeft;
    const walk = (x - startX) * 2; 
    slides.scrollLeft = scrollLeft - walk;
    updateProgress();
  });

  slides.addEventListener('scroll', () => {
    updateProgress();
  });

  window.addEventListener('resize', () => {
    slideWidth = slides.querySelector('.slide').offsetWidth;
  });

  // Auto-Sliding Carousel
  const slideTrack = document.querySelector('.slide-track');
  const slideItems = document.querySelectorAll('.slide-item');
  let slideItemWidth = slideItems[0].offsetWidth + 20; 
  let index = 0;
  const totalSlides = slideItems.length / 2;

  function moveSlides() {
    index++;
    if (index >= totalSlides) {
      index = 0;
      slideTrack.style.transition = 'none';
      slideTrack.style.transform = `translateX(0)`;
      setTimeout(() => {
        slideTrack.style.transition = 'transform 1s linear';
      }, 20);
    } else {
      slideTrack.style.transform = `translateX(-${index * slideItemWidth}px)`;
    }
  }

  setInterval(moveSlides, 3000); 
});
const faqs = document.querySelectorAll('.faq');

      faqs.forEach(faq => {
          const question = faq.querySelector('.question');
          const arrow = faq.querySelector('.arrow');
          const content = faq.querySelector('.content');

          question.addEventListener('click', () => {
              faq.classList.toggle('open');

              if (faq.classList.contains('open')) {
                  arrow.style.transform = 'translateY(-50%) rotate(90deg)';
              } else {
                  arrow.style.transform = 'translateY(-50%)';
              }
          });
      });