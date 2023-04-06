const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
const addToCartBtn = document.querySelector('.add-to-cart-btn');

addToCartBtn.addEventListener('click', function() {
  // Add product to cart logic here
});

