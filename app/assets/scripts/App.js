import "../styles/styles.css";
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 85)
new RevealOnScroll(document.querySelectorAll('.testimonials'), 75)


let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}