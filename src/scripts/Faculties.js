import { faculties as facultiesList } from '../utils/constants'


export default () => {
    const addEventListeners = (facultiesCard) => {
        facultiesCard.addEventListener('click', () => {
            facultiesCard.classList.toggle('faculties__items_open');
            facultiesCard.lastElementChild.classList.toggle('faculties__box-hidden_active');
        });
    }

    const createFacultyCard = (facultiesCard, item) => {
        const facultiesCardList = document.querySelector('.faculties__list-item');
        const facultiesName = facultiesCard.querySelector('.faculties__subtitle');
        const facultiesButton = facultiesCard.querySelector('.faculties__button');
        const facultiesText = facultiesCard.querySelector('.faculties__text');
        facultiesCardList.append(facultiesCard);
        facultiesButton.href = item.link;
        facultiesName.textContent = item.name;
        facultiesText.textContent = item.description;
        addEventListeners(facultiesCard)
    }

    facultiesList.forEach((item) => {
        const facultiesCard = document.querySelector('#faculties-card').content.querySelector('.faculties__items').cloneNode(true);
        createFacultyCard(facultiesCard, item);
    })
}
