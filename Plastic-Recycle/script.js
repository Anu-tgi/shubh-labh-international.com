// Function to toggle dropdown visibility
function toggleDropdown(target) {
  const element = document.getElementById(target);
  element.classList.toggle('show');
}

// Function to filter products based on selected checkboxes
function filterProducts() {
  const allCheckboxes = document.querySelectorAll('.filter-checkbox');
  const productCards = document.querySelectorAll('.product-card');
  const activeFilters = {};

  // Collect all active filters
  allCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
          const filterGroup = checkbox.closest('.filter-group').querySelector('h4').dataset.target;
          if (!activeFilters[filterGroup]) {
              activeFilters[filterGroup] = [];
          }
          activeFilters[filterGroup].push(checkbox.id);
      }
  });

  // Show or hide products based on active filters
  productCards.forEach(card => {
      let showCard = false; // By default, do not show the card

      // Check if product matches any active filters
      for (const [group, filters] of Object.entries(activeFilters)) {
          const productCategories = card.dataset.categories.split(' '); // Split categories into array

          // Check if product's categories match any of the active filters for the group
          if (filters.some(filter => productCategories.includes(filter))) {
              showCard = true;
              break;
          }
      }

      // Toggle product visibility
      card.style.display = showCard ? 'block' : 'none';
  });
}

// Function to clear all filters
function clearFilters() {
  const allCheckboxes = document.querySelectorAll('.filter-checkbox');
  allCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
  });
  filterProducts(); // Reset product display
}

// Add event listeners for checkboxes
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});

// Add CSS to handle dropdown visibility
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.innerHTML = `
      .filter-content { display: none; }
      .filter-content.show { display: block; }
  `;
  document.head.appendChild(style);
});
