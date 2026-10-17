import { featureproducts } from "./featuredproduct.js";
import { cart } from "./cartStorage.js";
import { addToStorage } from "./cartStorage.js";
export let featuredHTML = "";
import { rearangeHeader } from "./header.js";
import { updatePageQuantity } from "./cartStorage.js";
homepage();

function homepage() {
  rearangeHeader();

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
  const productDisplay = document.querySelector(".featured-product-contain-js");
  if (productDisplay) {
    productDisplay.innerHTML = featuredHTML;
  }
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

  updatePageQuantity();
  let category = document.querySelector(".category-contain");
  if (category) {
    category.addEventListener("click", () => {
      if (category) {
        category.classList.toggle("display");
      }
    });
  }
}
