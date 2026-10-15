import { cart } from "./cartStorage.js";
import { products } from "./products.js";
export function renderPayment() {
  let checkoutHTML = "";
  let Quantity = 0;
  let totalBeforeTax = 0;
  let matchingItem;
  cart.forEach((item) => {
    matchingItem = products.find((product) => product.id == item.id);
    Quantity += item.quantity;
    totalBeforeTax += item.quantity * matchingItem.price;
  });

  checkoutHTML += `<div class="Checkout-contain">
          <h2 class="checkout-header">Order Summary</h2>
          <div class="shopping-subtotal-contain">
            <p class="subtotal">
              Subtotal: items(<span class="amount-total">${Quantity}</span>)
            </p>
            <p class="subtotla-amount">${totalBeforeTax}</p>
          </div>
          <div class="shopping-subtotal-contain">
            <p class="shopping-estimate">Shipping Estimate</p>
            <p class="tax-amount">0.00</p>
          </div>
          <div class="shopping-subtotal-contain">
            <p class="tax">Tax</p>
            <p class="tax-amount">0.00</p>
          </div>
          <hr class="line-after-tax" />
          <div class="total-display">
            <p class="total">Total</p>
            <p class="total-amount">
              <i class="fa-solid fa-naira-sign"></i>${totalBeforeTax}
            </p>
          </div>
          <button class="place-order-click">Place Order</button>
        </div>`;

  document.querySelector(".js-checkout-main-contain").innerHTML = checkoutHTML;
}
