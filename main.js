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

// Modal megjelenítése
document.getElementById('privacy-button').onclick = function () {
    document.getElementById('privacy-modal').style.display = 'block';
};

// Modal bezárása
document.getElementById('privacy-close').onclick = function () {
    document.getElementById('privacy-modal').style.display = 'none';
};


//sutik

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookie");
    const declineBtn = document.getElementById("decline-cookie");

    // Ellenőrizzük, hogy a süti már be van-e állítva
    if (!document.cookie.includes("cookieAccepted")) {
        banner.style.display = "block";
    }

    acceptBtn.addEventListener("click", function () {
        document.cookie = "cookieAccepted=true; expires=Fri, 31 Dec 2099 23:59:59 GMT; path=/";
        banner.style.display = "none";
    });

    declineBtn.addEventListener("click", function () {
        document.cookie = "cookieAccepted=false; expires=Fri, 31 Dec 2099 23:59:59 GMT; path=/";
        banner.style.display = "none";
    });
});