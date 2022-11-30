import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default () => {
    const splide = new Splide( '.splide', {
        arrows: false
    } );
    splide.mount();

    const next = document.querySelector('.slider__button-left');
    const prev = document.querySelector('.slider__button-right');

    next.addEventListener("click", () => splide.go( '>' ));
    prev.addEventListener("click", () => splide.go( '<' ));
}

