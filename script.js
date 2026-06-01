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

