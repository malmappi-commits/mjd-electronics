import { featureproducts } from "./featuredproduct.js";
export let featuredHTML = "";

featureproducts.forEach((product) => {
  featuredHTML += `
        <div class="featured-image-contain">
          <img class="featured-product-images" src="${product.image}">
          <p class="featured-product-name">${product.name}</p>
          <P class="featured-product-amount"><i class="fa-solid fa-naira-sign"></i>${product.price}</P>
          <p class="featured-product-brand">BRAND:<SPAN class="featured-brand-name">${product.brand}</SPAN></p>
          <button class="featured-add-button">ADD TO CART</button>
        </div>`;
});
document.querySelector(".featured-product-contain-js").innerHTML = featuredHTML;
let category = document.querySelector(".category-contain");
category.addEventListener("click", () => {
  if (category) {
    category.classList.toggle("display");
  }
});
