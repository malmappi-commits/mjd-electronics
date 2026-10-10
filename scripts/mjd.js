import { featureproducts } from "./featuredproduct.js";
import { cart } from "./shop.js";
import { addToStorage } from "./shop.js";
export let featuredHTML = "";
function homepage() {
  featureproducts.forEach((product) => {
    featuredHTML += `
        <div class="featured-image-contain">
          <img class="featured-product-images" src="${product.image}">
          <p class="featured-product-name">${product.name}</p>
          <P class="featured-product-amount"><i class="fa-solid fa-naira-sign"></i>${product.price}</P>
          <p class="featured-product-brand">BRAND:<SPAN class="featured-brand-name">${product.brand}</span></p>
          <button class="featured-add-button featured-add-button-js" data-product-id="${product.id}">ADD TO CART</button>
        </div>`;
  });
  document.querySelector(".featured-product-contain-js").innerHTML =
    featuredHTML;

  let addButton = document.querySelectorAll(".featured-add-button-js");
  addButton.forEach((button) => {
    let productId = button.dataset.productId;
    button.addEventListener("click", () => {
      let matchingItem = cart.find((item) => item.id == productId);
      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        cart.push({
          id: productId,
          quantity: 1,
        });
      }
      addToStorage();
      updatePageQuantity();
    });
  });
  function updatePageQuantity() {
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
      addToStorage();
    });
    document.querySelector(".js-cart-count").innerHTML = cartQuantity;
  }
  updatePageQuantity();
  let category = document.querySelector(".category-contain");
  category.addEventListener("click", () => {
    if (category) {
      category.classList.toggle("display");
    }
  });
}
homepage();
