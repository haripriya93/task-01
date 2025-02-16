// JavaScript for mobile navigation toggle
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Menu';
toggleButton.classList.add('toggle-button');
document.querySelector('.navbar').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})