const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_item');
const icons = document.querySelector('.nav_links');

toggleBtn.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    e.preventDefault();
});