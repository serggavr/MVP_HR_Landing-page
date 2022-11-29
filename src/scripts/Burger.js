const Burger = () => {
  const burgerButton = document.querySelector(".header__burger-button");
  const page = document.querySelector(".body");
  const burgerContainer = document.querySelector(".header__burger-container");

  const switchBurger = () => {
    console.log(burgerContainer.style.display);
    if (
      burgerContainer.classList.contains("header__burger-container_visible")
    ) {
      burgerContainer.classList.remove("header__burger-container_visible");
      page.classList.remove("body_disabled");
    } else {
      burgerContainer.classList.add("header__burger-container_visible");
      page.classList.add("body_disabled");
    }
  };

  burgerButton.addEventListener("click", switchBurger);
};

export default Burger;
