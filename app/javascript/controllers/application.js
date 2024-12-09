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

  const testimonialsCarousel = new Swiper('.testimonials', {
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

  const ourDogUsersCarousel = new Swiper('.users', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
});


export { application }
