import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "mobileMenu" ]

  toggle() {
    this.mobileMenuTarget.classList.toggle('hidden')
  }
}