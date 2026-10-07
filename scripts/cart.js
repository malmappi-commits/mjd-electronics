import { cart, addToStorage } from "./shop.js";
import { products } from "./products.js";
function renderCart() {
  let matchingItem;
  let cartHTML = "";
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    let productId = cartItem.id;
    products.forEach((product) => {
      if (product.id === productId) {
        matchingItem = product;
      }
    });
    cartHTML += `<div class="product-bought-contain">
          <div class="bought-image-contain">
            <img class="bought-image" src="${matchingItem.image}" />
          </div>
          <div class="bought-details-contain">
            <p class="product-name-contain">
            ${matchingItem.name}
            </p>
            <div class="quantity-contain">
              <p>Quantity ${cartItem.quantity}</p>

              <button>-</button>
              <button class="add-to-quantity-js" data-product-id=${matchingItem.id}>+</button>
            </div>
          </div>
          <div class="product-amount-container">
            <p class="product-amount">
              <i class="fa-solid fa-naira-sign"></i>${matchingItem.price}
            </p>
          </div>
        </div>`;
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".main-cart-contain").innerHTML = cartHTML;
  document.querySelector(".cart-quantity").innerHTML = `${cartQuantity} items`;

  let addToProduct = document.querySelectorAll(".add-to-quantity-js");

  addToProduct.forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.dataset.productId;
      let matchingItem = cart.find((item) => item.id == productId);
      if (matchingItem) {
        matchingItem.quantity++;
        renderCart();
        addToStorage();
      }
    });
  });
}
renderCart();
