export default () => {
    const boxes = document.querySelectorAll('.faq__box');

    const collapse = (evt, arrowDown, arrowUp) => {
        evt.currentTarget.nextElementSibling.classList.toggle('faq__text_visible');
        arrowDown.classList.toggle('faq__arrow-down_hidden');
        arrowUp.classList.toggle('faq__arrow-up_active');
        evt.target.closest('.faq__item').classList.toggle('faq__box_opened');
    }

    boxes.forEach((box) => {
        const arrowDown = box.querySelector('.faq__arrow-down');
        const arrowUp = box.querySelector('.faq__arrow-up');
        box.addEventListener('click', (evt) => {
            collapse(evt, arrowDown, arrowUp)
        });
    });
}