import { cart, addToStorage, removeProduct } from "./shop.js";
import { products } from "./products.js";
import { renderPayment } from "./paymentsummary.js";
export function renderCart() {
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

              <button class="remove-from-quantity-js" data-product-id="${matchingItem.id}">-</button>
              <button class="add-to-quantity-js" data-product-id="${matchingItem.id}" >+</button>
            </div>
          </div>
          <div class="product-amount-container">
            <p class="product-amount">
              <i class="fa-solid fa-naira-sign"></i>${matchingItem.price}
            </p>
            <p class="product-total-amount-js product-total-amount"><i class="fa-solid fa-naira-sign"></i>${matchingItem.price * cartItem.quantity}</p>
            <button class="remove-product-js" data-product-id="${matchingItem.id}">x</button>
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
        renderPayment();
      }
    });
  });

  let removeFromProduct = document.querySelectorAll(".remove-from-quantity-js");
  removeFromProduct.forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.dataset.productId;
      let matchingItem = cart.find((item) => item.id == productId);
      if (matchingItem) {
        matchingItem.quantity--;
        if (matchingItem.quantity <= 0) {
          matchingItem.quantity = 0;
        }
        renderCart();
        addToStorage();
        renderPayment();
      }
    });
  });
  const removeItem = document.querySelectorAll(".remove-product-js");
  removeItem.forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.dataset.productId;
      removeProduct(productId);
      renderCart();
      addToStorage();
      renderPayment();
    });
  });
}

renderCart();
