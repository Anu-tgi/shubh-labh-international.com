// script.js

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const products = document.querySelectorAll(".product-card");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });

  function filterProducts() {
    const activeFilters = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);

    products.forEach((product) => {
      const productCategories = product.dataset.categories
        ? product.dataset.categories.split(" ")
        : [];
      const isVisible =
        activeFilters.length === 0 ||
        activeFilters.every((filter) => productCategories.includes(filter));

      if (isVisible) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Function to toggle dropdowns
  document.querySelectorAll(".filter-heading").forEach((heading) => {
    heading.addEventListener("click", function () {
      const content = document.getElementById(heading.dataset.target);
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});