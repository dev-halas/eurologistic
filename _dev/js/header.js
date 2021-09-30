const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');

    const navLinks = document.querySelectorAll('.menu-item:not(.menu-item-has-children)');

    // you can use forEach here too
    [].forEach.call(navLinks, link => {
        link.addEventListener('click', btnClick, false)
    })

    function btnClick() {
    // use Array function for lexical this
    [].forEach.call(navLinks, link => {
        // except for the element clicked, remove --active class
        if (link !== header) link.classList.remove('--active');
    });

    // toggle active on the clicked button
    header.classList.toggle('--active');
    }

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



