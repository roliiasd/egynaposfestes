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
//asdasd
// Modal megjelenítése
document.getElementById('privacy-button').onclick = function () {
    document.getElementById('privacy-modal').style.display = 'block';
};

// Modal bezárása
document.getElementById('privacy-close').onclick = function () {
    document.getElementById('privacy-modal').style.display = 'none';
};


