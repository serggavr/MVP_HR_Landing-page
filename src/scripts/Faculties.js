import { faculties as facultiesList } from "../utils/constants"


export default () => {
    const addEventListeners = (facultiesCard) => {
        const facultiesLink = facultiesCard.querySelector(".faculties__link");
        const facultiesClose = facultiesCard.querySelector(".faculties__close");

        facultiesLink.addEventListener("click", (evt) => {
            evt.target.closest('.faculties__items').classList.add('faculties__items_open');
            facultiesCard.lastElementChild.classList.add('faculties__box-hidden_active');
        });
        facultiesClose.addEventListener("click", (evt) => {
            evt.target.closest('.faculties__items').classList.remove('faculties__items_open');
            facultiesCard.lastElementChild.classList.remove('faculties__box-hidden_active');
        })
    }

    const createFacultyCard = (facultiesCard, item) => {
        const facultiesCardList = document.querySelector(".faculties__list-item");
        const facultiesName = facultiesCard.querySelector(".faculties__subtitle");
        facultiesCardList.append(facultiesCard);
        facultiesName.textContent = item.name;
        addEventListeners(facultiesCard)
    }

    facultiesList.forEach((item) => {
        const facultiesCard = document.querySelector("#faculties-card").content.querySelector(".faculties__items").cloneNode(true);
        createFacultyCard(facultiesCard, item);
    })
}
