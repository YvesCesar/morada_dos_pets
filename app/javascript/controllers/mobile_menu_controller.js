import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["mobileMenu", "menuIcon"]

    toggle() {
        this.mobileMenuTarget.classList.toggle('hidden')
        
        if (this.mobileMenuTarget.classList.contains('hidden')) {
            this.menuIconTarget.innerHTML = this.changeIconTo("hamburger")
        } else {
            this.menuIconTarget.innerHTML = this.changeIconTo("close")
        }
    }

    changeIconTo(iconName) {
        const iconNameMap = {
            "hamburger": "M4 6h16M4 12h16M4 18h16",
            "close": "M6 18L18 6M6 6l12 12"
        };
    
        let svgDirectory = iconNameMap[iconName];
        
        return `<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${svgDirectory}"></path>
                </svg>`
    }
}
