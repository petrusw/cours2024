var menuHamburgerDom = document.getElementById("menuHamburger"),
    mainMenuDom = document.getElementById("mainMenu");

if(menuHamburgerDom != null && mainMenuDom != null){
    menuHamburgerDom.addEventListener('click', function(e) {
        mainMenuDom.classList.toggle('is-active');
    });
}
else {
    console.log('Il manque un ou deux Ã©lÃ©ments du menu');
}