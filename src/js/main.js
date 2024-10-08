// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)




function cloudAnimations() {
  const container = document.querySelector('.hero');

  if (!container) {
    return null
  }
  gsap.from(".cloud-1", { duration: 2, x: -200, ease: "power2.out" });
  gsap.from(".cloud-2", { duration: 2, y: -100, x: -100, ease: "power2.out" });
  gsap.from(".cloud-3", { duration: 2, x: 200, ease: "power2.out" });
  gsap.from(".cloud-4", { duration: 2, y: 100, x: 100, ease: "power2.out" });
  gsap.from(".cloud-5", { duration: 2, y: 100, ease: "power2.out" });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    gsap.to(".cloud-1", { y: scrollY * 0.1 });
    gsap.to(".cloud-2", { y: scrollY * 0.15 });
    gsap.to(".cloud-3", { y: scrollY * 0.05 });
    gsap.to(".cloud-4", { y: scrollY * 0.2 });
    gsap.to(".cloud-5", { y: scrollY * 0.3 });
  });
}

cloudAnimations();

AOS.init();
//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};