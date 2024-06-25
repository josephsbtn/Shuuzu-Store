function selectPayment(element) {
  const option = document.querySelectorAll(".payment-option");
  option.forEach((option) => option.classList.toggle(".bg-myBlue"));
}
