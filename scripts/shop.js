import { products } from "./products.js";
export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    id: "MJD0001",
    quantity: 2,
  },
  {
    id: "MJD0002",
    quantity: 1,
  },
];
let shopHTML = "";
products.forEach((product) => {
  shopHTML += `<div class="featured-image-contain">
          <img class="featured-product-images" src="${product.image}">
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

    updateQuantity();
    addToStorage();
  });
});
export function updateQuantity() {
  let cartCount = 0;
  cart.forEach((item) => {
    cartCount += item.quantity;
  });

  let cartQuantity = document.querySelector(".cart-count-js");
  if (cartQuantity) {
    cartQuantity.innerHTML = cartCount;
  }
}
export function addToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
