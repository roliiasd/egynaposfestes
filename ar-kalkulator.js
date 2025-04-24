document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        console.log('Navbar toggler clicked');
        const icon = document.getElementById('menu-icon');
        const navbarCollapse = document.getElementById('navbarNav');
        //asdas
        if (navbarCollapse.classList.contains('show')) {
            //console.log('Collapse is open');
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-bars');
        } else {
            //console.log('Collapse is closed');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-caret-up');
        }
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
    //console.log(`Görgetési pozíció: ${scrollPosition}`);

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

window.addEventListener('DOMContentLoaded', () => {
    getAlapMunkak();
    getFestesArak();
    getMazolasArak();
    getTapetazasArak();
    getEgyebMunkak();
    getGipszkartonozas();

});

async function getAlapMunkak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/alapmunkak/alapmunkak.json');
        const jobs = await response.json();
        displayAlapmunkak(jobs);
    } catch (error) {
        console.log(error);
    }
}

function displayAlapmunkak(jobs) {
    const alapmunkakContainerDiv = document.getElementById('alapmunkakContainer');
    alapmunkakContainerDiv.innerHTML = '';
    jobs.forEach(job => {
        //Pari container div
        const alapmunkakPairContainerDiv = document.createElement('div');
        alapmunkakPairContainerDiv.classList = 'pair-conainer';
        //Work item div
        const workItemDiv = document.createElement('div');
        workItemDiv.classList = 'work-item';
        const workItemH3 = document.createElement('h3');
        workItemH3.innerText = job.nev;
        const workItemP = document.createElement('p');
        workItemP.style.color = 'white';
        workItemP.innerText = `<strong>Munkadíj:</strong> ${job.munkadij} Ft/m²<br><strong>Anyagdíj:</strong> ${job.anyagdij} Ft/m²`;

        //Calculator div
        const calculatorItemDiv = document.createElement('div');
        calculatorItemDiv.classList = 'calculator-item';
        //form group div
        const formGroupDiv = document.createElement('div');
        formGroupDiv.classList = 'form-group';
        const formGroupLabel = document.createElement('label');
        formGroupLabel.setAttribute('for', job.id);
        formGroupLabel.innerText = 'Adja meg a területet (m²):';
        const formGroupInput = document.createElement('input');
        formGroupInput.type = 'number';
        formGroupInput.classList = 'form-control', 'area-input';
        formGroupInput.id = job.id;
        formGroupInput.dataset.munkadij = job.munkadij;
        formGroupInput.dataset.anyagdij = job.anyagdij;
        formGroupInput.ariaPlaceholder = 'Adja meg a területet ben';
        formGroupInput.ariaValueMin = '0';

        




        workItemDiv.append(workItemH3, workItemP);
        formGroupDiv.append(formGroupLabel, formGroupInput);
        calculatorItemDiv.append(formGroupDiv);
        alapmunkakPairContainerDiv.append(workItemDiv, calculatorItemDiv);
        alapmunkakContainerDiv.append(alapmunkakPairContainerDiv);


    })

}

async function getFestesArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/festes/festes.json');
        const jobs = await response.json();
        displayFestes(jobs);
    } catch (error) {
        console.log(error);
    }
}


function displayFestes(jobs) {
    const tbody = document.getElementById('tbody-fest');

}

async function getMazolasArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/mazolas/mazolas.json');
        const jobs = await response.json();
        displayMazolas(jobs);
    } catch (error) {
        console.log(error);
    }
}

function displayMazolas(jobs) {
    const tbody = document.getElementById('tbody-mazol');

}

async function getTapetazasArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/tapetazas/tapetazas.json');
        const jobs = await response.json();
        displayTapetazas(jobs);
    } catch (error) {
        console.log(error);
    }
}

function displayTapetazas(jobs) {
    const tbody = document.getElementById('tbody-tapeta');

}

async function getEgyebMunkak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/egyeb-munkak/egyeb-munkak.json');
        const jobs = await response.json();
        displayEgyebMunkak(jobs);
    } catch (error) {
        console.log(error);
    }
}

function displayEgyebMunkak(jobs) {
    const tbody = document.getElementById('tbody-egyeb');

}

async function getGipszkartonozas() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/gipszkartonozas/gipszkartonozas.json');
        const jobs = await response.json();
        displayGipszkartonozas(jobs);
    } catch (error) {
        console.log(error);

    }

}

function displayGipszkartonozas(jobs) {
    const tbody = document.getElementById('tbody-gipsz');


}


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
window.onload = function () {
    // A DOM elemek teljes betöltése után fut le
    const inputs = document.querySelectorAll('.area-input');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
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
