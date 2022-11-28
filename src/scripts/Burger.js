const Burger = () => {
  const burgerButton = document.querySelector(".header__burger-button");
  const page = document.querySelector(".page");
  const burgerContainer = document.querySelector(".header__burger-container");

  const switchBurger = () => {
    if (burgerContainer.style.display === "none") {
      burgerContainer.style.display = "flex";
      page.classList.add("page_disabled");
    } else {
      burgerContainer.style.display = "none";
      page.classList.remove("page_disabled");
    }
  };

  burgerButton.addEventListener("click", switchBurger);
};

export default Burger;
