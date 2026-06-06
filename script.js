const button = document.querySelector('.show__more-btn');
const hiddenBrands = document.querySelectorAll('.hidden__brand');

button.addEventListener('click', () => {
    hiddenBrands.forEach((brand) => {
        brand.classList.toggle('show');
    });

    button.classList.toggle('active');


if (button.textContent === 'Показать все') {
    button.textContent = 'Скрыть';
} else {
    button.textContent = 'Показать все';
}
});

let swiper;

function initSwiper() {
  if (window.innerWidth <= 320 && !swiper) {
    swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  if (window.innerWidth > 320 && swiper) {
    swiper.destroy(true, true);
    swiper = undefined;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);