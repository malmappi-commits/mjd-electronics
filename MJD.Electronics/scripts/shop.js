import { products } from "./products.js";
import { rearangeHeader } from "./header.js";
import { cart } from "./cartStorage.js";
import { addToStorage } from "./cartStorage.js";
import { updatePageQuantity } from "./cartStorage.js";
rearangeHeader();
function renderShop() {
  let shopHTML = "";
  products.forEach((product) => {
    shopHTML += `<div class="featured-image-contain">
          <a href="productinfo.html?productId=${product.id}"><img class="featured-product-images" src="${product.image}"> </a>
          <p class="featured-product-name">${product.name}</p>
          <P class="featured-product-amount"><i class="fa-solid fa-naira-sign"></i>${product.price}</P>
          <p class="featured-product-brand">BRAND:<SPAN class="featured-brand-name">${product.brand}</SPAN></p>
          <button class="featured-add-button featured-add-button-js" data-product-id="${product.id}">ADD TO CART</button>
        </div>`;
  });
  let display = document.querySelector(".featured-product-contain");
  if (display) {
    display.innerHTML = shopHTML;
  }
  let cartButton = document.querySelectorAll(".featured-add-button-js");
  cartButton.forEach((button) => {
    let productId = button.dataset.productId;
    button.addEventListener("click", () => {
      let sameProduct;

      cart.forEach((item) => {
        if (item.id === productId) {
          sameProduct = item;
        }
      });
      if (sameProduct) {
        sameProduct.quantity++;
      } else {
        cart.push({ id: productId, quantity: 1 });
      }
      updatePageQuantity();
      addToStorage();
    });
  });
  let categoryContain = document.querySelector(
    ".shop-category-buttons-contain",
  );
  const shopCategories = document.querySelector(".shop-filter-categories-js");
  shopCategories.addEventListener("click", () => {
    categoryContain.classList.toggle("categoty-active");
  });
}

renderShop();
updatePageQuantity();
