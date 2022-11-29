import css from "../pages/index.css";
import quiz from "./Quiz";
import burger from "./Burger.js";

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
const text = document.querySelector("#text-transform");
if (screenWidth <= 450) {
  //JS для мобилок здесь
  text.textContent = "и\u00A0получай доход"
}

burger();
quiz();
