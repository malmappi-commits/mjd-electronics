import { products } from "./products.js";
import { rearangeHeader } from "./header.js";
let url = new URL(window.location.href);
const productID = url.searchParams.get("productId");
console.log(productID);
let matchingItem;
let innerHTML = "";
products.forEach((product) => {
  if (product.id === productID) {
    matchingItem = product;
  }
});
innerHTML += `
      <div class="image-contain">
        <img src="${matchingItem.image}">
      </div>
      <div>
        <h2 class="product-header">${matchingItem.name}</h2>
        <p class="product-price"><i class="fa-solid fa-naira-sign"></i>${matchingItem.price}</p>
        <div class="product-details-contail">
          <p><i class="fa-solid fa-asterisk asterisks"></i>Brand: Electron</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Model: XY-378</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>3 Burner Hob With Timer Function</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Brass Heavy powerful flame burner</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Automatic Ignition Switch</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Heat Resistant Panel</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Low Gas Consumption</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Matt Finish</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Safety Cutoff</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>No Fingerprint</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>Frosted Nano Toughened Glass</p>
          <p><i class="fa-solid fa-asterisk asterisks"></i>1 year brand warranty</p>
        </div>
        <hr class="line-after-details">
        <div class="add-to-cart-contain">
          <button  class="details-add-to-cart">Add to cart</button>
          <p class="quantity-display">1</p>
          <button class="add-to-product"><i class="fa-solid fa-minus"></i></button>
          
          <button class="add-to-product"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>`;
document.querySelector(".main-contain-js").innerHTML = innerHTML;
rearangeHeader();
