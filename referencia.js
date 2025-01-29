
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

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash.replace("#", ""); // Pl. "Szobafestes"
    
    if (hash) {
        const tabButton = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
        
        if (tabButton) {
            tabButton.click(); // Automatikusan aktiválja a megfelelő fület
        }
    }
});
