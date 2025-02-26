
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
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Kezdeti állapot beállítása: mindent deaktiválunk
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Kezdeti aktiválás a hash alapján
    const hash = window.location.hash.replace("#", ""); // Pl. "Szobafestes"
    
    if (hash) {
        const tabButton = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
        
        if (tabButton) {
            // Ha létezik hash alapján megfelelő gomb, kattintunk rá
            tabButton.classList.add('active');
            const tabId = tabButton.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        }
    } else {
        // Ha nincs hash, az első tab-ot aktiváljuk
        const firstTabButton = tabBtns[0];
        firstTabButton.classList.add('active');
        const firstTabId = firstTabButton.getAttribute('data-tab');
        document.getElementById(firstTabId).classList.add('active');
    }

    // Tab gombok kezelése
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



// Modális ablak megjelenítése
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let modalVideo = document.getElementById("video01");
let videoSource = document.getElementById("videoSource");
let close = document.getElementsByClassName("close")[0];

// Kép rákattintásakor megjelenik a modális ablak
document.querySelectorAll('.grid-item img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.style.display = "block"; // Kép megjelenítése
        modalVideo.style.display = "none"; // Videó elrejtése
        modalImg.src = this.src;
    });
});

// Videóra kattintás esetén
document.querySelectorAll('.grid-item video').forEach(video => {
    video.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.style.display = "none"; // Kép elrejtése
        modalVideo.style.display = "block"; // Videó megjelenítése
        videoSource.src = this.querySelector('source').src; // Videó forrás beállítása
        modalVideo.load(); // Videó újratöltése
        modalVideo.play(); // Videó lejátszása
        modalVideo.muted = true; // A videó automatikusan némítva lesz
    });
});

// Modális ablak bezárása
close.onclick = function() {
    modal.style.display = "none";
    modalVideo.pause(); // Videó leállítása
    modalVideo.currentTime = 0; // Videó pozíció visszaállítása az elejére
}

// Amennyiben bárhol kattintasz a modálon kívül, bezáródik a modál
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




