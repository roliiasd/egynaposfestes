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

function createJobCard(job) {
    const pairContainerDiv = document.createElement('div');
    pairContainerDiv.classList.add('pair-container');

    const workItemDiv = document.createElement('div');
    workItemDiv.classList.add('work-item');

    const workItemH3 = document.createElement('h3');
    workItemH3.innerText = job.nev;

    const workItemP = document.createElement('p');
    workItemP.style.color = 'white';
    workItemP.innerHTML = `<strong>Munkadíj:</strong> ${job.munkadij} Ft/m²<br><strong>Anyagdíj:</strong> ${job.anyagdij} Ft/m²`;

    workItemDiv.append(workItemH3, workItemP);

    const calculatorItemDiv = document.createElement('div');
    calculatorItemDiv.classList.add('calculator-item');

    const formGroupDiv = document.createElement('div');
    formGroupDiv.classList.add('form-group');

    const formGroupLabel = document.createElement('label');
    formGroupLabel.setAttribute('for', job.id);
    formGroupLabel.innerText = 'Adja meg a területet (m²):';

    const formGroupInput = document.createElement('input');
    formGroupInput.type = 'number';
    formGroupInput.classList.add('form-control', 'area-input');
    formGroupInput.id = job.id;
    formGroupInput.dataset.munkadij = job.munkadij;
    formGroupInput.dataset.anyagdij = job.anyagdij;
    formGroupInput.placeholder = 'Adja meg a területet';
    formGroupInput.min = '0';

    formGroupDiv.append(formGroupLabel, formGroupInput);
    calculatorItemDiv.append(formGroupDiv);

    pairContainerDiv.append(workItemDiv, calculatorItemDiv);

    return pairContainerDiv;
}

function displayJobs(jobs, title, targetElementId) {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('py-5');

    const titleH2 = document.createElement('h2');
    titleH2.style.fontWeight = 'bold';
    titleH2.classList.add('text-center', 'mb-4', 'title');
    titleH2.innerText = title;

    const sortDiv = document.createElement('div');
    sortDiv.classList.add('d-flex', 'flex-column', 'flex-md-row', 'flex-wrap');

    jobs.forEach(job => {
        const jobCard = createJobCard(job);
        sortDiv.appendChild(jobCard);
    });

    rowDiv.append(titleH2, sortDiv);
    containerDiv.appendChild(rowDiv);

    const target = document.getElementById(targetElementId);
    if (target) {
        target.appendChild(containerDiv);
    } else {
        console.error(`Nem található az elem ezzel az ID-val: ${targetElementId}`);
    }
}

async function getAlapMunkak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/alapmunkak/alapmunkak.json');
        const jobs = await response.json();
        displayJobs(jobs, 'Alapmunkák árai', 'alapmunkakTargetDiv');
    } catch (error) {
        console.log(error);
    }
}



async function getFestesArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/festes/festes.json');
        const jobs = await response.json();
        displayJobs(jobs, 'Festés árak', 'festesTargetDiv');
    } catch (error) {
        console.log(error);
    }
}


async function getMazolasArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/mazolas/mazolas.json');
        const jobs = await response.json();
        displayJobs(jobs, 'Mázolás árak', 'mazolasTargetDiv');
    } catch (error) {
        console.log(error);
    }
}

async function getTapetazasArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/tapetazas/tapetazas.json');
        const jobs = await response.json();
        displayJobs(jobs, 'Tapétázás árak', 'tapetazasTargetDiv');
    } catch (error) {
        console.log(error);
    }
}

async function getEgyebMunkak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/egyeb-munkak/egyeb-munkak.json');
        const jobs = await response.json();
        displayJobs(jobs, 'Egyéb munkák árak', 'egyebMunkakTargetDiv');
    } catch (error) {
        console.log(error);
    }
}

async function getGipszkartonozas() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/gipszkartonozas/gipszkartonozas.json');
        const jobs = await response.json();
        displayJobs(jobs, 'Gipszkartonozás árak', 'gipszkartonozasTargetDiv');
    } catch (error) {
        console.log(error);

    }

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
