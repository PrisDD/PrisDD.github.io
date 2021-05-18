//MENU

// регистрация события загрузки документа.
window.addEventListener("load", menuInit, false);

// установка обработчиков для menu и элементов menu.
function menuInit() {
   let menuImg = document.getElementById('menu-img');
   menuImg.addEventListener("click", handler, false);

}

function handler(e) {
   if (!e.target.matches('.nav-menu-icon-container')) {
      let navBar = document.getElementById('myNavBar').classList.toggle("show");
      for (let i = 0; i < navBar.length; i++) {
         let openDropdown = navBar[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }

}
