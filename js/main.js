"use strict";

// // const sum = require("./module/sum.js");
// const togglemenu = require("./module/toggle.js");
// togglemenu();
// Open Burger
var menuBurgerItem = document.querySelector(".body-burger__item");
var menuBurger = document.querySelector(".menu__burger-open");
var activated = document.querySelector(".activated");
menuBurgerItem.addEventListener("click", function () {
  menuBurger.classList.toggle("activated");
  menuBurgerItem.classList.toggle("opened");
});
var Catalog = document.querySelector(".menu__burger-open-second");
var MenuOpenCatalog = document.querySelector(".burger-open__item-arrow");
var close = document.querySelector(".close");
MenuOpenCatalog.addEventListener('click', function () {
  Catalog.classList.add('activated');
  menuBurgerItem.classList.add('hide');
});
close.addEventListener('click', function () {
  Catalog.classList.remove('activated');
  menuBurgerItem.classList.remove('hide');
}); // Open Phones

var arrow = document.querySelector(".arrow");
var hide = document.querySelector('.hide');
var rotate = document.querySelector('.rotate');
var list = document.querySelector('.phones-header__list');
var active = document.querySelector('.active');
arrow.addEventListener("click", function () {
  list.classList.toggle('hide');
  arrow.classList.toggle('rotate');
}); //
// Open subMenu

document.addEventListener("click", documentActions);

function documentActions(e) {
  var targetElement = e.target;

  if (targetElement.closest('[data-parent]')) {
    var subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    var subMenu = document.querySelector("[data-submenu=\"".concat(subMenuId, "\"]"));

    if (subMenu) {
      targetElement.classList.toggle('active');
      subMenu.classList.toggle('hide');
    } else {}

    e.preventDefault();
  }
} // Swiper


var Swiper1 = new Swiper('.body-main__swiper', {
  pagination: {
    el: '.body-main__swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 2000
  },
  loop: true,
  speed: 500,
  spaceBetween: 150
});
var Swiper2 = new Swiper('.swiper-bestsellers', {
  pagination: {
    el: '.swiper-bestsellers__swiper-pagination',
    clickable: true
  },
  speed: 700,
  spaceBetween: 50
});
var Swiper3 = new Swiper('.body-novelties__swiper', {
  pagination: {
    el: '.swiper-bestsellers__swiper-pagination',
    clickable: true
  },
  speed: 700,
  spaceBetween: 50
});
var Swiper4 = new Swiper('.swiper-sale', {
  pagination: {
    el: '.swiper-bestsellers__swiper-pagination',
    clickable: true
  },
  speed: 700,
  spaceBetween: 50
}); // Фильтр 

var rangeInput = document.querySelectorAll(".form-menu__range-input input"),
    priceInput = document.querySelectorAll(".form-menu__items input"),
    range = document.querySelector(".form-menu__slider .form-menu__progress");
var priceGap = 1000;
priceInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    var minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = minPrice / rangeInput[0].max * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - maxPrice / rangeInput[1].max * 100 + "%";
      }
    }
  });
});
rangeInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    var minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = minVal / rangeInput[0].max * 100 + "%";
      range.style.right = 100 - maxVal / rangeInput[1].max * 100 + "%";
    }
  });
});
var FilterTitle = document.querySelector('.filter__title');
var FilterList = document.querySelector('.filter__list');
var hideFilter = document.querySelector('.hide_filter');
FilterTitle.addEventListener('click', function () {
  FilterList.classList.toggle('hide_filter-item');
});
var FilterOpen = document.querySelector('.filter__open-menu');
var FilterMenu = document.querySelector('.blocks-catalog__menu');
FilterOpen.addEventListener('click', function () {
  FilterMenu.classList.toggle('hide_filter');
});