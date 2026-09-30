let category = document.querySelector(".category-contain");
category.addEventListener("click", () => {
  if (category) {
    category.classList.toggle("display");
  }
});
