import ProductArchive, { productList } from './product-list.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px
import navBarDisplay from './nav-bar-responsive';
import scroll from './scroll.js';
import { populateShoppingCart }  from './shoppingCart.js';

navBarDisplay();
const DefaultProducts = new ProductArchive(productList);
DefaultProducts.displayProducts();
filterToggle();
//Dummy function! this is just testing whether the add-to-cart button can retrieve the info
document.querySelector('.product-cards').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (e.target.matches('.add-to-cart')) {
    // console.log(
    //   // e.target.closest('.product-card').dataset.id,
    //   // e.target.closest('.product-card').dataset.category,
    //   // e.target.closest('.product-card').querySelector('.product-card-name').innerText,
    //   // e.target.closest('.product-card').querySelector('.product-card-price').innerText,
    // );
    
    var productId = e.target.closest('.product-card').dataset.id;
    var productImage = e.target.closest('.product-card').querySelector('.product-card-image').getAttribute('src');
    var productName =  e.target.closest('.product-card').querySelector('.product-card-name').innerText;
    var productPrice =  e.target.closest('.product-card').querySelector('.product-card-price').innerText;

    populateShoppingCart(productId, productName, productPrice, productImage);

  }
});
document.querySelector('#product-modal .add-to-cart').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  
  var productId = document.querySelector('#product-modal').dataset.id;
  var productName =  document.querySelector('#product-modal').querySelector('.product-desc-content > h5').innerText;
  var productImage =  document.querySelector('#product-modal').querySelector('.img-fluid').getAttribute('src');
  var productPrice =  document.querySelector('#product-modal').querySelector('.price-qty > h5').innerText;
  populateShoppingCart(productId, productName, productPrice, productImage);
  // if( document.querySelector('#product-modal').querySelector('.product-desc-input-width > input').value < 1){
  //   alert("The quantity cannot be less than one");
  //   document.querySelector('#product-modal').querySelector('.product-desc-input-width > input').value = 1;
  // } else {
  //   //  console.log(
  //   // //   document.querySelector('#product-modal').dataset.id,
  //   // //   document.querySelector('#product-modal').dataset.category,
  //   // //   document.querySelector('#product-modal').querySelector('.product-desc-content > h5').innerText,
  //   // //   document.querySelector('#product-modal').querySelector('.price-qty > h5').innerText,
  //   // //   document.querySelector('#product-modal').querySelector('.product-desc-input-width > input').value,
  //   // );
  // }
});
scroll();
