//variables del document
const menu_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const Burguer_menu = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const menu_carrito_icon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menu_email.addEventListener('click', toggleDesktopMenu);
Burguer_menu.addEventListener('click', toggleMobileMenu);
menu_carrito_icon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed =aside.classList.contains('inactve');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktop_menu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed =aside.classList.contains('inactve');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobile_menu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobile_menu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobile_menu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}