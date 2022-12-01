export default function createVacancyCard (vacancyData, vacancyCardTemplateSelector, vacancyCardContainer, handleClickRespondButton, handleClickShareButton) {
  const vacancyCard = document.querySelector(vacancyCardTemplateSelector).content.querySelector(".vacancy-card").cloneNode(true)
  
  const vacancyName = vacancyCard.querySelector('.vacancy-card__vacancy-name')
  const vacancyCourse = vacancyCard.querySelector('.vacancy-card__vacancy-title')
  const vacancyDirection = vacancyCard.querySelector('.vacancy-card__vacancy-direction')
  const vacancySalary = vacancyCard.querySelector('.vacancy-card__vacancy-salary')
  const vacancySeeMore = vacancyCard.querySelector('.vacancy-card__see-more')
  const vacancyCloseSeeMore = vacancyCard.querySelector('.vacancy-card__close-more')
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
  
  vacancyRequirementsTitle.innerHTML = 'Требования'
  vacancyRequirementRespondButton.innerHTML = 'Откликнуться'
  vacancyRequirementShareButton.innerHTML = 'поделиться предложением'

  vacancyRequirementsContainer.classList.add('vacancy-card__requirements-container-hidden')

  vacancyData.requirements.forEach(el => {
    vacancyRequirementsListElement.innerHTML = el
    vacancyRequirementsList.append(vacancyRequirementsListElement.cloneNode(true))
  })

  const showMoreVacancyInfo = () => {
    vacancyRequirementsContainer.classList.toggle('vacancy-card__requirements-container-hidden')
      for (let sibling of vacancyCardContainer.children) {
        sibling.classList.toggle('vacancy-card-hidden');
      }
      showMoreVacancyButton.classList.toggle('vacancy__load-more-button-hidden')
      vacancyCard.classList.toggle('vacancy-card-hidden')
  }

  vacancySeeMore.addEventListener('click', (e) => {
    showMoreVacancyInfo()
    vacancyCloseSeeMore.classList.toggle('button_hidden')
    vacancySeeMore.classList.toggle('button_hidden')
  })

  vacancyCloseSeeMore.addEventListener('click', (e) => {
    showMoreVacancyInfo()
    vacancyCloseSeeMore.classList.toggle('button_hidden')
    vacancySeeMore.classList.toggle('button_hidden')
  })

  vacancyRequirementRespondButton.addEventListener('click', () => {
    handleClickRespondButton()
  })

  vacancyRequirementShareButton.addEventListener('click', () => {
    handleClickShareButton()
  })

  return(vacancyCard)
}