
document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const icon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    dropbtn.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle('show');

        if (dropdownMenu.classList.contains('show')) {
            icon.classList.remove('bi-caret-down-fill');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('bi-caret-down-fill');
        }
    });

    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
        icon.classList.remove('fa-bars');
        icon.classList.add('bi-caret-down-fill');
    });
});




//Ar kalkulator
//Ar kalkulator
//Ar kalkulator
//Ar kalkulator
//Ar kalkulator

// Tároló az összes számításhoz
let totalAmount = 0;

// Elemek lekérése és események beállítása
document.querySelectorAll('.area-input').forEach(input => {
    input.addEventListener('input', function () {
        // Munkadíj, anyagdíj és terület lekérése
        const munkadij = parseFloat(this.getAttribute('data-munkadij')) || 0;
        const anyagdij = parseFloat(this.getAttribute('data-anyagdij')) || 0;
        const area = parseFloat(this.value) || 0;

        // Kiválasztott elem teljes költségének kiszámítása
        const total = (munkadij + anyagdij) * area;
        
        // Kijelzés az egyes elemeknél
        const totalCostSpan = document.getElementById('totalCost' + this.id.replace('area', ''));
        totalCostSpan.textContent = total.toLocaleString() + ' Ft';

        // Összesítés frissítése
        updateTotal();
    });
});

// Összes érték frissítése
function updateTotal() {
    // Újraszámoljuk az összesített összeget
    totalAmount = Array.from(document.querySelectorAll('.area-input')).reduce((sum, input) => {
        const munkadij = parseFloat(input.getAttribute('data-munkadij')) || 0;
        const anyagdij = parseFloat(input.getAttribute('data-anyagdij')) || 0;
        const area = parseFloat(input.value) || 0;
        return sum + (munkadij + anyagdij) * area;
    }, 0);

    // Összesített költség kiírása
    const totalCostDisplay = document.getElementById('osszegzes');
    totalCostDisplay.textContent = 'Összesen: ' + totalAmount.toLocaleString() + ' Ft';
}

/*
// Görgetés figyelése
window.addEventListener('scroll', toggleBackToTopButton);

function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("tetejereGomb");
    if (!backToTopButton) {
        console.error("A 'backToTop' elem nem található a DOM-ban.");
        return;
    }

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Debug üzenet a konzolban
    console.log(`Görgetési pozíció: ${scrollPosition}`);

    if (scrollPosition > 250) {
        backToTopButton.style.display = "block";
        console.log("Megjelenik a gomb"); // Naplózás: Gomb megjelenik
    } else {
        backToTopButton.style.display = "none";
        console.log("Eltűnik a gomb"); // Naplózás: Gomb eltűnik
    }
}
*/
// Visszagörgetés a tetejére
function scrollToTop() {
    console.log("Visszagörgetés a tetejére indult"); // Naplózás: Visszagörgetés indult
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Megakadályozza, hogy a kattintás az egész dokumentumra hasson
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Bezárás, ha máshová kattintunk az oldalon
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
});
