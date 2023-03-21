//variables del document
const menu_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const Burguer_menu = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-menu");
const menu_carrito_icon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cards_container = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector(".product-detail-2");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menu_email.addEventListener('click', toggleDesktopMenu);
Burguer_menu.addEventListener('click', toggleMobileMenu);
menu_carrito_icon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

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
    closeProductDetailAside()
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobile_menu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobile_menu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}
function openProductDetailAside() {
    aside.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p');
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    productImgCart.classList.add('icon');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cards_container.appendChild(productCard);
}