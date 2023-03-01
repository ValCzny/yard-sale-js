//variables del document
const menu_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const Burguer_menu = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");

menu_email.addEventListener('click', toggleDesktopMenu);
Burguer_menu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktop_menu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobile_menu.classList.toggle('inactive');
}