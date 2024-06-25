document.addEventListener("DOMContentLoaded", function () {
  const quantities = document.querySelectorAll(".quantity");
  const prices = document.querySelectorAll(".price");
  const subtotalElement = document.getElementById("subtotal");
  const subtotalItems = document.querySelectorAll(".subItem");
  const totalElement = document.getElementById("total");

  function calculateSubtotal() {
    let subtotal = 0;
    let total = 0;
    quantities.forEach((quantityElement, index) => {
      const id = quantityElement.getAttribute("data-id");
      const quantity = parseInt(quantityElement.textContent);
      const priceElement = document.querySelector(`.price[data-id="${id}"]`);
      const price = parseInt(priceElement.textContent);
      const subItem = quantity * price;
      subtotalItems[index].textContent = subItem.toLocaleString("id-ID");
      subtotal += subItem;
    });
    subtotalElement.textContent = subtotal.toLocaleString("id-ID");
  }

  function totalCalculating(subtotal) {}

  function updateQuantity(id, increment) {
    const quantityElement = document.querySelector(
      `.quantity[data-id="${id}"]`
    );
    let quantity = parseInt(quantityElement.textContent);
    quantity = increment ? quantity + 1 : quantity - 1;
    if (quantity < 1) quantity = 1;
    quantityElement.textContent = quantity;
    calculateSubtotal();
  }

  document.querySelectorAll(".plus-1, .plus-2, .plus-3").forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      updateQuantity(id, true);
    });
  });

  document
    .querySelectorAll(".minus-1, .minus-2, .minus-3")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        updateQuantity(id, false);
      });
    });

  calculateSubtotal(); // Initial calculation
});

function toggleDropdown() {
  let dropDown = document.querySelector("#dropDownButton #dropdown");
  dropDown.classList.toggle("hidden");
}
