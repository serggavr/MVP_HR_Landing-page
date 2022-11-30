const Burger = () => {
  const burgerButton = document.querySelector(".header__burger-button");
  const burgerContainer = document.querySelector(".header__burger-container");
  const links = document.querySelectorAll(".header__link");

  const switchBurger = () => {
    if (
      burgerContainer.classList.contains("header__burger-container_visible")
    ) {
      burgerContainer.classList.remove("header__burger-container_visible");
    } else {
      burgerContainer.classList.add("header__burger-container_visible");
    }
  };

  burgerButton.addEventListener("click", switchBurger);
  links.forEach((item) => {
    item.addEventListener('click', switchBurger);
  })
};

export default Burger;
