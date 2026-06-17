const navBurger = document.querySelector('#navBurger');
const navMenu = document.querySelector('#navMenu');
    

// MENU BURGER MOBILE
navBurger.addEventListener('click', () => {
    if(navMenu.classList.toggle('is-active')) {
        navBurger.classList.add('change');
    } else {
        navBurger.classList.remove('change');
    }
});

// BOTON DESPLEGABLE ABOUT
const btn1 = document.querySelector('#btnAbout');
const about = document.querySelector('#about');

btn1.addEventListener('click', () => {
    about.classList.toggle('active');
});


// BOTON DESPLEGABLE SKILLS
const btn2 = document.querySelector('#btn');
const skill = document.querySelector('#skills');

btn2.addEventListener('click', () => {
    skill.classList.toggle('active');
});

// BOTON OVERLAY PREGUNTAS 
const items = document.querySelectorAll('.fag-content');

items.forEach(item => {
    const btn = item.querySelector('.fag-btn');
    btn.addEventListener('click', () => {
        item.classList.toggle("open");
    });
});