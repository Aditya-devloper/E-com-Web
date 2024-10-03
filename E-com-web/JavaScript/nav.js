/********** Toggle Menu Button ***********/

const menuBtn = document.querySelector('#menu-btn')
const crossBtn = document.querySelector('#cross-btn')
const navbar = document.querySelector('#navbar');

if (window.innerWidth > 995) {
    menuBtn.style.display = 'none';
    crossBtn.style.display = 'none';
} else {
    menuBtn.addEventListener('click', () => {
        menuBtn.style.display = 'none';
        crossBtn.style.display = 'block';
        navbar.classList.add('nav-width');
    })

    crossBtn.addEventListener('click', () => {
        menuBtn.style.display = 'block';
        crossBtn.style.display = 'none';
        navbar.classList.remove('nav-width');
    })
};



/********** Changing Mode (Dark/Light) ***********/

const darkbtn = document.querySelector('#dark-btn')
const body = document.querySelector('body');

let lightMode = true;

darkbtn.addEventListener('click', () => {
    if (lightMode == true) {
        body.style.backgroundColor = '#000000';
        body.style.color = '#F7F7F7';
        lightMode = false;
        darkbtn.innerHTML = `<span><i class="bi bi-brightness-high"></i></span> Light`
    } else {
        body.style.backgroundColor = '#F7F7F7';
        body.style.color = '#000000';
        lightMode = true;
        darkbtn.innerHTML = `<span><i class="bi bi-moon"></i></span> Dark`
    }
});