document.querySelector(".sideMenu").addEventListener("click", function (event) {
  event.preventDefault();
  const navMenu = document.querySelector(".navMenu");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("visible");
});
