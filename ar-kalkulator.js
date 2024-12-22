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

document.querySelectorAll('.area-input').forEach(input => {
    input.addEventListener('input', function () {
        const munkadij = parseFloat(this.getAttribute('data-munkadij')) || 0;
        const anyagdij = parseFloat(this.getAttribute('data-anyagdij')) || 0;
        const area = parseFloat(this.value) || 0;
        const total = (munkadij + anyagdij) * area;
        const totalCostSpan = document.getElementById('totalCost' + this.id.replace('area', ''));
        totalCostSpan.textContent = total.toLocaleString() + ' Ft';
    });
});


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

    if (scrollPosition > 400) {
        backToTopButton.style.display = "block";
        //console.log("Megjelenik a gomb"); // Naplózás: Gomb megjelenik
    } else {
        backToTopButton.style.display = "none";
        //console.log("Eltűnik a gomb"); // Naplózás: Gomb eltűnik
    }
}

// Visszagörgetés a tetejére
function scrollToTop() {
    //console.log("Visszagörgetés a tetejére indult"); // Naplózás: Visszagörgetés indult
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


//automata vegosszeg szamitas
//automata vegosszeg szamitas
//automata vegosszeg szamitas
//automata vegosszeg szamitas



// Function to calculate the total cost based on input values
function updateTotalCost(id) {
    let area = document.getElementById(id).value;
    let munkadij = document.getElementById(id).dataset.munkadij;
    let anyagdij = document.getElementById(id).dataset.anyagdij;

    if (area >= 0) {
        let total = (area * munkadij) + (area * anyagdij);
        document.getElementById("totalCost" + id.slice(-2)).textContent = total + " Ft";
        saveData(id, area);  // Save the data to localStorage
        updateOverallTotal();
    }
}

// Function to save data to localStorage
function saveData(id, area) {
    localStorage.setItem(id, area);
}

// Function to load data from localStorage and set the values
function loadData() {
    const inputs = document.querySelectorAll('.area-input');
    inputs.forEach(input => {
        let savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
            updateTotalCost(input.id);  // Recalculate the total for each field on page load
        }
    });
}
window.onload = function() {
    // A DOM elemek teljes betöltése után fut le
    const inputs = document.querySelectorAll('.area-input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            updateTotalCost(input.id);
        });
    });

    // Az összes összesített költség frissítése a betöltéskor
    updateOverallTotal();
};

// Function to calculate the total cost based on input values
function updateTotalCost(id) {
    let area = document.getElementById(id).value;
    let munkadij = document.getElementById(id).dataset.munkadij;
    let anyagdij = document.getElementById(id).dataset.anyagdij;

    if (area >= 0) {
        let total = (area * munkadij) + (area * anyagdij);

        // Check if the element with the corresponding totalCost id exists
        const totalCostElement = document.getElementById("totalCost" + id.slice(-2));
        if (totalCostElement) {
            totalCostElement.textContent = total + " Ft";  // Update the total cost display
        }

        updateOverallTotal();  // Recalculate and update the overall total cost
    }
}

// Function to update the overall total cost
function updateOverallTotal() {
    let total = 0;
    const inputs = document.querySelectorAll('.area-input');
    let anyInput = false; // Flag to check if any input was filled

    inputs.forEach(input => {
        let area = input.value || 0;
        let munkadij = input.dataset.munkadij;
        let anyagdij = input.dataset.anyagdij;
        if (area > 0) {
            anyInput = true;
        }
        total += (area * munkadij) + (area * anyagdij);
    });

    // Show or hide the result container based on if any input is filled
    const resultContainer = document.querySelector('.result-container');
    if (anyInput) {
        resultContainer.style.display = 'block';
        document.getElementById('totalSum').textContent = total + " Ft";
    } else {
        resultContainer.style.display = 'none';
    }
}
