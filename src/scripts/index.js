import css from "../pages/index.css";
import quiz from "./Quiz";
import burger from "./Burger.js";

import PopupWithForm from './PopupWithForm.js';
import faculties from "./Faculties";

import { vacanciesList } from '../utils/constants';
import dropdown from './Dropdown'
import createVacancyCard from './CreateVacancyCard';
import Section from './Section.js'

console.log("run index.js");



const vacanciesContainerSelector = '.vacancy__container';
const cardTemplateSelector = '#vacancyCard';
const loadMoreVacanciesButtonSelector = '.vacancy__load-more-button';
const dropdownButtonTypeFacultySelector = '.dropdown__button_type_faculty'
const dropdownButtonTypeRoleSelector = '.dropdown__button_type_role'
const dropdownButtonSelectedClass = 'dropdown__button_style_selected'
const vacancyCardSelector = '.vacancy-card';
const requirementPopupSelector = '.popup_type_respond'
const buttonOpenFeedbackSelector = '.button__open_feedback-popup'

const loadMoreVacanciesButtonButton = document.querySelector(loadMoreVacanciesButtonSelector)
const dropdownTypeFacultyButton = document.querySelector(dropdownButtonTypeFacultySelector)
const dropdownTypeRoleButton = document.querySelector(dropdownButtonTypeRoleSelector)
const buttonOpenFeedback = document.querySelector(buttonOpenFeedbackSelector)
const vacancyCardContainer = document.querySelector(vacanciesContainerSelector)
let filteredVacanciesList = []


// requirementPopup


const requirementPopupSubmit = () => {
  console.log('Отправка формы')
}

const requirementPopup = new PopupWithForm({
  submitForm: requirementPopupSubmit
}, requirementPopupSelector)

requirementPopup.setEventListeners()

buttonOpenFeedback.addEventListener('click', () => {
  requirementPopup.open()
})

const handleClickRespondButton = () => {
  console.log('связаться с нами')
}

const handleClickShareButton = () => {
  console.log('поделиться вакансией')
}

// requirementPopup end

const vacanciesCardsList = new Section({
  renderer: (item) => {
    const vacancy = createVacancyCard(item, cardTemplateSelector, vacancyCardContainer, handleClickRespondButton, handleClickShareButton)
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

// ------
const vacancyCard = document.querySelector(vacancyCardSelector)

vacanciesCardsList.removeItems()
vacanciesCardsList.renderItems(applyFilters(vacanciesList), 6)

const screenWidth = window.screen.width;
const text = document.querySelector("#text-transform");
if (screenWidth <= 450) {
  //JS для мобилок здесь
  text.textContent = "и\u00A0получай доход"
}

burger();
quiz();


// import { faculties as facultiesList } from "../utils/constants"
// const facultiesCardList = document.querySelector(".faculties__list-item");
// const facultiesCard = document.querySelectorAll(".faculties__items");
// const facultiesItem = document.querySelectorAll(".faculties__item");
// const facultiesLink = document.querySelectorAll(".faculties__link");
// const facultiesClose = document.querySelectorAll(".faculties__close");
// const facultiesBox = document.querySelectorAll(".faculties__box-hidden");


// facultiesList.forEach((item) => {
//   const facultiesCard = document.querySelector("#faculties-card").content.querySelector(".faculties__items").cloneNode(true);
//   const facultiesName = facultiesCard.querySelector(".faculties__subtitle");
//   const facultiesLink = facultiesCard.querySelector(".faculties__link");
//   facultiesCardList.append(facultiesCard);
//   facultiesName.textContent = item;
//   facultiesLink.addEventListener("click", collapse);
// })

// const collapse = (evt) => {

// }

// facultiesLink.forEach(function (item, i) {
//   item.addEventListener('click', function (evt) {
//     evt.preventDefault();
//
//     facultiesItem.forEach(function (item , i) {
//       facultiesItems[i].classList.add('faculties__items_open');
//       facultiesBox[i].classList.add('faculties__box-hidden_active')
//     });
//   });
// });
//
// facultiesClose.forEach(function (item, i) {
//   item.addEventListener('click', function (evt) {
//     evt.preventDefault();
//
//     facultiesItem.forEach(function (item , i) {
//       facultiesItem[i].classList.remove('faculties__items_open');
//       facultiesBox[i].classList.remove('faculties__box-hidden_active')
//     });
//   });
// });
// -------------------------------------------------------------

faculties();

