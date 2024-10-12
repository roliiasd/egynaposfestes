document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        const icon = document.getElementById('menu-icon');
        const navbarCollapse = document.getElementById('navbarNav');

        if (navbarCollapse.classList.contains('show')) {
            icon.classList.remove('fa-caret-left');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-caret-left');
        }
    });
});
