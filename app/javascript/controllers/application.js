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
});


export { application }
