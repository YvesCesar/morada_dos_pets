import { Application } from "@hotwired/stimulus"
import AOS from "aos";

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

document.addEventListener('turbo:load', () => {
  AOS.init({
    duration: 1200,
  });

  const testimonialsCarousel = new Swiper('.testimonialsSwiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const ourDogUsersCarousel = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


export { application }
