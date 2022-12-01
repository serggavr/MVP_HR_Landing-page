import Splide from '@splidejs/splide';
import '@splidejs/splide/css';


export default () => {
    const splide = new Splide( '.splide', {
        arrows: false,
        padding: { right: '0px' },
        type   : 'loop',
        lazyLoad: 'nearby',
        wheel    : true,
        classes: {
          pagination: 'slider__pagination-wrapper',
          page      : 'slider__dot',
        },
    } );
    splide.mount();

    const next = document.querySelector('.slider__button-left');
    const prev = document.querySelector('.slider__button-right');

    next.addEventListener("click", () => splide.go( '>' ));
    prev.addEventListener("click", () => splide.go( '<' ));
}

