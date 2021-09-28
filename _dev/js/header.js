const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    const navLink = document.querySelectorAll('a[href="#?"]');
    const toggleClass = (el, className) => el.classList.toggle('sub-menu a');

    console.log(
        navLink
    );

    burger.addEventListener('click', () => {
        header.classList.toggle('--active');
    });


}

navSlide();

const headerScroll = document.querySelector('.header');

window.onscroll = function() {
    let top = window.scrollY; 
    if (top >= 100) {
        headerScroll.classList.add('scrolled')
    }
    else {
        headerScroll.classList.remove('scrolled')
    }
}



