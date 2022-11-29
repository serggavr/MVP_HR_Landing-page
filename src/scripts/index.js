import css from "../pages/index.css";
import burger from "../scripts/Burger"
import quiz from "../scripts/Quiz";

console.log("run index.js");
//---------------------------------------------------- 
const facultiesItems = document.querySelectorAll(".faculties__items");
const facultiesItem = document.querySelectorAll(".faculties__item");
const facultiesLink = document.querySelectorAll(".faculties__link");
const facultiesClose = document.querySelectorAll(".faculties__close");
const facultiesBox = document.querySelectorAll(".faculties__box-hidden")

facultiesLink.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      facultiesItem.forEach(function (item , i) {
        facultiesItems[i].classList.add('faculties__items_open');
        facultiesBox[i].classList.add('faculties__box-hidden_active')

      });
    });
});

facultiesClose.forEach(function (item, i) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();

    facultiesItem.forEach(function (item , i) {
      facultiesItem[i].classList.remove('faculties__items_open');
      facultiesBox[i].classList.remove('faculties__box-hidden_active')
    });
  });
});
        // -------------------------------------------------------------

const vacanciesContainerSelector = '.vacancy__container';
const cardTemplateSelector = '#vacancyCard';
const loadMoreVacanciesButtonSelector = '.vacancy__load-more-button';
const dropdownButtonTypeFacultySelector = '.dropdown__button_type_faculty'
const dropdownButtonTypeRoleSelector = '.dropdown__button_type_role'
const dropdownButtonSelectedClass = 'dropdown__button_style_selected'

const loadMoreVacanciesButtonButton = document.querySelector(loadMoreVacanciesButtonSelector)
const dropdownTypeFacultyButton = document.querySelector(dropdownButtonTypeFacultySelector)
const dropdownTypeRoleButton = document.querySelector(dropdownButtonTypeRoleSelector)

let filteredVacanciesList = []

const vacanciesCardsList = new Section({
  renderer: (item) => {
    const vacancy = createVacancyCard(item, cardTemplateSelector)
    vacanciesCardsList.addItem(vacancy);
  }
}, vacanciesContainerSelector)

loadMoreVacanciesButtonButton.addEventListener('click', () => {

  vacanciesCardsList.renderItems(applyFilters(vacanciesList), 3)

  if (vacanciesCardsList.container.children.length === filteredVacanciesList.length ) {
    loadMoreVacanciesButtonButton.setAttribute('disabled', '')
  } else {
    loadMoreVacanciesButtonButton.removeAttribute('disabled', '')
  }
})

const filterVacancies = (query, queryField, vacanciesList) => {
  let filteredList = vacanciesList
  if (query === '' || query === 'Все') {
    return filteredList 
  }
  filteredList = vacanciesList.filter(el => el[queryField] === query)
  return filteredList
}

dropdownTypeFacultyButton.addEventListener('change', (e) => {

  vacanciesCardsList.removeItems()
  vacanciesCardsList.renderItems(applyFilters(vacanciesList), 6)

  if (e.target.value === '' || e.target.value === 'Все') {
    dropdownTypeFacultyButton.classList.remove(dropdownButtonSelectedClass)
  } else {
    dropdownTypeFacultyButton.classList.add(dropdownButtonSelectedClass)
  }
})

dropdownTypeRoleButton.addEventListener('change', (e) => {

  vacanciesCardsList.removeItems()
  vacanciesCardsList.renderItems(applyFilters(vacanciesList), 6)

  if (e.target.value === '' || e.target.value === 'Все') {
    dropdownTypeRoleButton.classList.remove(dropdownButtonSelectedClass)
  } else {
    dropdownTypeRoleButton.classList.add(dropdownButtonSelectedClass)
  }
})

const applyFilters = (vacanciesList) => {
  filteredVacanciesList = filterVacancies(dropdownTypeRoleButton.value, 'role', vacanciesList)
  filteredVacanciesList = filterVacancies(dropdownTypeFacultyButton.value, 'faculty', filteredVacanciesList)

  if (vacanciesCardsList.container.children.length === filteredVacanciesList.length || filteredVacanciesList.length <= 6) {
    loadMoreVacanciesButtonButton.setAttribute('disabled', '')
  } else {
    loadMoreVacanciesButtonButton.removeAttribute('disabled', '')
  }

  return filteredVacanciesList
}

vacanciesCardsList.removeItems()
vacanciesCardsList.renderItems(applyFilters(vacanciesList), 6)


const screenWidth = window.screen.width;
const welcomeText = document.querySelector("#text-transform");
if (screenWidth <= 450) {
  //JS для мобилок здесь
  welcomeText.textContent = "и\u00A0получай доход"
}

burger();
quiz();


