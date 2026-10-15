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
export function addToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function removeProduct(productID) {
  cart = cart.filter((item) => item.id != productID);
  addToStorage();
}
export function updatePageQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
    addToStorage();
  });

  const cartCount = document.querySelector(".js-cart-count");
  if (cartCount) {
    cartCount.innerHTML = cartQuantity;
  }
}
