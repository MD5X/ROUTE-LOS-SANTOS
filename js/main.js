/=============== SHOW MENU ===============/
const   navMenu = document.getElementById('nav'),
        navOpen = document.getElementById('open'),
        navClose = document.getElementById('close')
//Menu Show/
if(navOpen){
    navOpen.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    });
}
/Menu-Hidden/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    });
}