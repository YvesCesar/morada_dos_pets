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

  const swiper = new Swiper('.swiper', {
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
});


export { application }
