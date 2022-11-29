export default function createVacancyCard (vacancyData, vacancyCardTemplateSelector) {
  const vacancyCard = document.querySelector(vacancyCardTemplateSelector).content.querySelector(".vacancy-card").cloneNode(true)
  
  const vacancyName = vacancyCard.querySelector('.vacancy-card__vacancy-name')
  const vacancyCourse = vacancyCard.querySelector('.vacancy-card__vacancy-title')
  const vacancyDirection = vacancyCard.querySelector('.vacancy-card__vacancy-direction')
  const vacancySalary = vacancyCard.querySelector('.vacancy-card__vacancy-salary')
  // const vacancyLink = vacancyCard.querySelector('.vacancy-card__link')
  const vacancyInfoContainer = vacancyCard.querySelector('.vacancy-card__info-container')
  const vacancyFooter = vacancyCard.querySelector('.vacancy-card__footer')

  const vacancyRequirementsContainer = vacancyCard.querySelector('.vacancy-card__requirements-container')
  const vacancyRequirementsTitle = vacancyCard.querySelector('.vacancy-card__vacancy-requirements-title')
  const vacancyRequirementsList = vacancyCard.querySelector('.vacancy-card__requirements-list')
  const vacancyRequirementsListElement = vacancyCard.querySelector('.vacancy-card__requirements-list-element')
  const vacancyRequirementRespondButton = vacancyCard.querySelector('.vacancy-card__requirements-respond-button')
  const vacancyRequirementShareButton = vacancyCard.querySelector('.vacancy-card__requirements-share-button')

  const showMoreVacancyButton = document.querySelector('.vacancy__load-more-button')

  vacancyName.innerHTML = vacancyData.role
  vacancyCourse.innerHTML = vacancyData.course
  vacancyDirection.innerHTML = vacancyData.faculty
  vacancySalary.innerHTML = vacancyData.sаlary
  // vacancyLink.src = vacancyData.link
  
  vacancyRequirementsTitle.innerHTML = 'Требования'
  vacancyRequirementRespondButton.innerHTML = 'Откликнуться'
  vacancyRequirementShareButton.innerHTML = 'Поделиться вакансией'

  vacancyRequirementsContainer.classList.add('vacancy-card__requirements-container-hidden')

  vacancyData.requirements.forEach(el => {
    vacancyRequirementsListElement.innerHTML = el
    vacancyRequirementsList.append(vacancyRequirementsListElement.cloneNode(true))
  })

  vacancyCard.addEventListener('click', (e) => {
    if (!e.target.className.includes('button')) {
      vacancyRequirementsContainer.classList.toggle('vacancy-card__requirements-container-hidden')
    // vacancyInfoContainer.classList.toggle('vacancy-card__info-container-hidden')
    // vacancyFooter.classList.toggle('vacancy-card__footer-hidden')
      for (let sibling of vacancyCard.parentNode.children) {
        sibling.classList.toggle('vacancy-card-hidden');
      }
      showMoreVacancyButton.classList.toggle('vacancy__load-more-button-hidden')
      vacancyCard.classList.toggle('vacancy-card-hidden')
    }
  })

  return(vacancyCard)
}