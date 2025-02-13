const buttonBurger = document.querySelector(
  ".mobile-header-menu-burger-button"
);

const buttonCloseMenu = document.querySelector(".close-menu");
const modelMenu = document.querySelector(".header-container");
const listItemsMenu = document.querySelectorAll(".header-menu-list-item");

buttonBurger.addEventListener("click", toggleMenu);
buttonCloseMenu.addEventListener("click", toggleCloseMenu);
listItemsMenu.forEach((item) => {
  item.addEventListener("click", toggleCloseMenu);
});

function toggleMenu() {
  modelMenu.classList.toggle("hidden");
  document.body.style.overflowY = "scroll";
  document.body.style.overflow = "hidden";
}

function toggleCloseMenu() {
  modelMenu.classList.toggle("hidden");
  document.body.style.overflowY = "scroll";
}
