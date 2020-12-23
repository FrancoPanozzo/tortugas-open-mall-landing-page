// Functionality to open and close the navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');
const menuCloseBtn = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});

// Fucntion to close navbar
const closeNavbar = (e) => {
  mainMenu.classList.remove('active');
};

// Functionality to close the navbar when a nav link is clicked
mainMenu.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() !== 'a') return;
  closeNavbar();
});

// Functionality to close the navbar when close button is clicked
menuCloseBtn.addEventListener('click', closeNavbar);
