import css from '../pages/index.css';
import quiz from './Quiz';
import burger from './Burger.js';
import faq from './Faq.js';
import slider from './Slider';
import PopupWithForm from './PopupWithForm.js';
import faculties from './Faculties';
import { vacanciesList } from '../utils/constants';
import createVacancyCard from './CreateVacancyCard';
import Section from './Section.js'

const vacanciesContainerSelector = '.vacancy__container';
const cardTemplateSelector = '#vacancyCard';
const loadMoreVacanciesButtonSelector = '.vacancy__load-more-button';
const dropdownButtonTypeFacultySelector = '.dropdown__button_type_faculty'
const dropdownButtonTypeRoleSelector = '.dropdown__button_type_role'
const dropdownButtonSelectedClass = 'dropdown__button_style_selected'
const requirementPopupSelector = '.popup_type_respond'
const buttonOpenFeedbackSelector = '.button__open_feedback-popup'
const buttonOpenSubscribeSelector = '.button__open_subscribe-popup'

const loadMoreVacanciesButtonButton = document.querySelector(loadMoreVacanciesButtonSelector)
const dropdownTypeFacultyButton = document.querySelector(dropdownButtonTypeFacultySelector)
const dropdownTypeRoleButton = document.querySelector(dropdownButtonTypeRoleSelector)
const buttonOpenFeedback = document.querySelector(buttonOpenFeedbackSelector)
const buttonOpenSubscribe = document.querySelector(buttonOpenSubscribeSelector)
const vacancyCardContainer = document.querySelector(vacanciesContainerSelector)
const bottomText = document.querySelector('#text-transform-bot');
const upperText = document.querySelector('#text-transform-up');
const screenWidth = window.screen.width;
let filteredVacanciesList = []

const requirementPopupSubmit = () => {
  console.log('Отправка формы')
}

const handleClickRespondButton = () => {
  console.log('связаться с нами')
}

const handleClickShareButton = () => {
  console.log('поделиться вакансией')
}

const requirementPopup = new PopupWithForm({
  submitForm: requirementPopupSubmit
}, requirementPopupSelector)

requirementPopup.setEventListeners()

buttonOpenFeedback.addEventListener('click', () => {
  requirementPopup.open()
})

buttonOpenSubscribe.addEventListener('click', () => {
  console.log('подписка')
})

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
  if (filteredVacanciesList.length === 0) {
    console.log('ноль')
  }
  if (vacanciesCardsList.container.children.length === filteredVacanciesList.length || filteredVacanciesList.length <= 6) {
    loadMoreVacanciesButtonButton.setAttribute('disabled', '')
  } else {
    loadMoreVacanciesButtonButton.removeAttribute('disabled', '')
  }
  return filteredVacanciesList
}

vacanciesCardsList.removeItems()
vacanciesCardsList.renderItems(applyFilters(vacanciesList), 6)


if (screenWidth <= 450) {
  upperText.textContent = 'Делись опытом в'
  bottomText.textContent = 'и\u00A0получай доход'
}

burger();
quiz();
faculties();
faq();
slider();



