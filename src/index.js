document.querySelector(".sideMenu").addEventListener("click", function (event) {
  event.preventDefault();
  const navMenu = document.querySelector(".navMenu");
  setTimeout(() => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("visible");
  }, 20);
});
