export default function createVacancyCard (vacancyData, vacancyCardTemplateSelector) {
  const vacancyCard = document.querySelector(vacancyCardTemplateSelector).content.querySelector(".vacancy-card").cloneNode(true)
  
  const vacancyName = vacancyCard.querySelector('.vacancy-card__vacancy-name')
  const vacancyCourse = vacancyCard.querySelector('.vacancy-card__vacancy-title')
  const vacancyDirection = vacancyCard.querySelector('.vacancy-card__vacancy-direction')
  const vacancySalary = vacancyCard.querySelector('.vacancy-card__vacancy-salary')
  const vacancyLink = vacancyCard.querySelector('.vacancy-card__link')

  vacancyName.innerHTML = vacancyData.role
  vacancyCourse.innerHTML = vacancyData.course
  vacancyDirection.innerHTML = vacancyData.faculty
  vacancySalary.innerHTML = vacancyData.sаlary
  vacancyLink.src = vacancyData.link

  return(vacancyCard)
}