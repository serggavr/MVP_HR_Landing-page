export default () => {
    const boxes = document.querySelectorAll(".faq__box");

    const collapse = (evt) => {
        evt.currentTarget.nextElementSibling.classList.toggle('faq__text_visible');
    }

    boxes.forEach((box) => {
        box.addEventListener('click', collapse);
    });
}