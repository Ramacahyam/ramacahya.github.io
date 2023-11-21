// toogle class active

const container = document.querySelector
('.container');
// ketika menu di klik
document.querySelector('#hamburger-menu').
onclick = () =>  {
    container.classList.toggle('active');
};

// klik dimana saja menghilangkan nav

const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !container.contains(e.target)) {
        container.classList.remove('active');
    }
});