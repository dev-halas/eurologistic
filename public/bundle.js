/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(6);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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





/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var currentSlide = 1;
let timeVar;

// pobieram wszystkie zdjęcia
const slides = document.getElementsByClassName("hero-slide");
const buttons = document.querySelectorAll(".sliderCounter--number");

// tutaj jest większość logiki
function showSlide(slideIndex) {

  if (slideIndex > slides.length) {
    currentSlide = 1;
  }
  if (slideIndex < 1) {
    currentSlide = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[currentSlide - 1].classList.add('active');

}


// funkcja do dodawania klasy do buttonu
const getButton = (target) => {
  buttons.forEach((element) => {
    if (element.classList.contains("--active")) {
      element.classList.remove("--active");
    }
    target.classList.add("--active");
  });
};

// logika interwału zdjęć
const initialDelay = () => {
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  getButton(buttons[currentSlide]);
  currentSlide++;
  showSlide(currentSlide);
};
clearInterval(timeVar);
timeVar = setInterval(initialDelay, 7000);


// event na klikanie buttonu
buttons.forEach((el) => {
  el.addEventListener("click", function (e) {
    
    window.clearInterval(timeVar);
    getButton(e.currentTarget);
    currentSlide = parseInt(e.currentTarget.textContent);
    showSlide(currentSlide);
    timeVar = setInterval(initialDelay, 7000);

  });
});

// wywołanie
window.onload = function () {
  showSlide(currentSlide);
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const elements = document.querySelectorAll('.animate');
    const options = {
        root: null,
        threshhold: 0.5,
        rootMargin: '0px 0px -20% 0px'
     };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('animated');
            //observer.unobserve(entry.target)
        })
    }, options)

elements.forEach(element => observer.observe(element))


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const preload = document.getElementById("preload"); 

window.addEventListener("load", function(){
    setTimeout(function(){
        preload.style.transition = "all 1s ease-in-out";
        preload.style.display = "none";
    }, 2000)
})

/***/ })
/******/ ]);