 // Получаем ссылку на элемент
 let scrollingElement = document.querySelector('.header');
      
 // Функция, которая будет вызываться при прокрутке
 function handleScroll() {
   // Проверяем, насколько прокручена страница по вертикали
   var scrollPosition = window.scrollY;

   // Условие, при котором добавляем класс
   if (scrollPosition > 0) {
     scrollingElement.classList.add('scrolled');
   } else {
     scrollingElement.classList.remove('scrolled');
   }
 }

 // Добавляем прослушиватель события прокрутки
 window.addEventListener('scroll', handleScroll);

 // Получаем ссылки на элементы
 let menuButton = document.querySelector('.nav__btn');
 let menu = document.querySelector('.nav');
 let bannerContainer = document.querySelector('.banner__container');
 

 // Добавляем слушатели событий
 menuButton.addEventListener('click', toggleMenu);

 // Функция для открытия/закрытия меню
 function toggleMenu() {
     menuButton.classList.toggle('open');
     menu.classList.toggle('open');
     bannerContainer.classList.toggle('hide');
 }

 // Добавляем слушатель события для каждого пункта меню
 var menuItems = document.querySelectorAll('.nav__link');
 menuItems.forEach(function(item) {
     item.addEventListener('click', closeMenu);
 });

 // Функция для закрытия меню
 function closeMenu() {
     menu.classList.remove('open');
     menuButton.classList.remove('open');
     bannerContainer.classList.remove('hide');
 }
