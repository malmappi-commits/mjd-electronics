export function rearangeHeader() {
  const storeName = document.querySelector(".store-name-contain");
  const searchContain = document.querySelector(".search-contain-js");
  const secondHeader = document.querySelector(".second-header-js");
  const firstHeader = document.querySelector(".header-js");
  const likeContain = document.querySelector(".cart-like-js");
  const parentContain = storeName.parentElement;
  const originalNextSibling = storeName.nextElementSibling;
  const loginContain = originalNextSibling.nextElementSibling;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      secondHeader.prepend(storeName);
      originalNextSibling.style.display = "none";
      loginContain.style.display = "none";
      firstHeader.style.display = "none";
      secondHeader.classList.add("scrolled");
    } else if (window.scrollY <= 100) {
      firstHeader.appendChild(loginContain);
      originalNextSibling.style.display = "flex";
      parentContain.insertBefore(storeName, originalNextSibling);
      loginContain.style.display = "flex";
      firstHeader.style.display = "flex";
      secondHeader.classList.remove("scrolled");
    }
  });
  let searchIcon = document.querySelector(".search-main-contain-second-header");
  let searchButton = document.querySelector(".search-second-header");
  if (searchIcon && searchButton) {
    searchButton.addEventListener("click", () => {
      searchIcon.classList.toggle("button-active");
    });
  }
}
