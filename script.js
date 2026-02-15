const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const header = document.querySelector('.header');

if (mobileMenu && navList && header) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('toggle');
        header.classList.toggle('active');
    });
}
