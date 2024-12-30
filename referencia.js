
//galeria
//galeria
//galeria
//galeria
//galeria

$('.carousel').carousel({
    interval: 10000, // 5 másodpercenként vált
    ride: 'carousel',
    pause: 'hover',
    wrap: true
});


//Lenyilo menu atalakito

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        const icon = document.getElementById('menu-icon');
        const navbarCollapse = document.getElementById('navbarNav');

        if (navbarCollapse.classList.contains('show')) {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-caret-up');
        }
    });
});
