const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('navbarHeight');
    
});

navbarLinks.addEventListener('click', () => {
document.getElementsByClassName('navbar-links')[0].classList.remove('active');
document.getElementsByClassName('navbar')[0].classList.remove('navbarHeight');
});
