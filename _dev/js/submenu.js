const submenuSlide = () => {
    const menu = document.querySelector('.menu-item-has-children');
    const submenu = document.querySelector('.sub-menu');

    menu.addEventListener('click', () => {
        submenu.classList.toggle('opened');
    });
}
submenuSlide();

const langMenu = () => {
    const menu = document.querySelector('.navbarLang--first');
    const submenu = document.querySelector('.navbarLang--submenu');

    menu.addEventListener('click', () => {
        submenu.classList.toggle('opened');
    });
}
langMenu();