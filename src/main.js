'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
// document.addEventListener('scroll', function () { }); 아래있는거랑 같은 거임
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  // console.log(1 - window.scrollY / homeHeight); 그 값을 확인하기 위함
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
// document.addEventListener('scroll', () => {
//   if (window.scrollY > homeHeight / 2) {
//     arrowUp.style.opacity = 1;
//   } else {
//     arrowUp.style.opacity = 0;
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
    arrowUp.style.opacity = 0;
});
document.addEventListener('scroll', () => {
    const homeRatio = (window.scrollY / homeHeight);
    arrowUp.style.opacity = (homeRatio > 0.5) ? 1 : 0;
});

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
