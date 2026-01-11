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
    const tbody = document.getElementById('tbody-alap');

    jobs.forEach(job => {
        const sor = document.createElement('tr');
        sor.innerHTML = `
            <td>
            ${job.nev}
            <div class="tdDiv"><tt>${job.leiras}</tt></div> 
            </td>
            <td>${job.anyagdij}</td>
            <td>${job.munkadij}</td>
        `;
        tbody.append(sor);
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

    jobs.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            ${job.nev}
            <div class="tdDiv"><tt>${job.leiras}</tt></div> 
            </td>
            <td>${job.anyagdij}</td>
            <td>${job.munkadij}</td>
        `;
        tbody.append(row);
    })
}

async function getMazolasArak() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/mazolas/mazolas.json',);
        const jobs = await response.json();
        displayMazolas(jobs);
    } catch (error) {
        console.log(error);
    }
}

function displayMazolas(jobs) {
    const tbody = document.getElementById('tbody-mazol');

    jobs.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            ${job.nev}
            <div class="tdDiv"><tt>${job.leiras}</tt></div> 
            </td>
            <td>${job.anyagdij}</td>
            <td>${job.munkadij}</td>
        `;
        tbody.append(row);
    })
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

    jobs.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            ${job.nev}
            <div class="tdDiv"><tt>${job.leiras}</tt></div> 
            </td>
            <td>${job.anyagdij}</td>
            <td>${job.munkadij}</td>
        `;
        tbody.append(row);
    })
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

    jobs.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            ${job.nev}
            <div class="tdDiv"><tt>${job.leiras}</tt></div> 
            </td>
            <td>${job.anyagdij}</td>
            <td>${job.munkadij}</td>
        `;
        tbody.append(row);

        if (job.leiras === "Ezek az árak 100m2 felett érvényesek.") {
            //leirasElem.classList.add('special-description');
        }
    })

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

    jobs.forEach(job => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            ${job.nev}
            <div class="tdDiv"><tt>${job.leiras}</tt></div> 
            </td>
            <td>${job.anyagdij}</td>
            <td>${job.munkadij}</td>
        `;
        tbody.append(row);
    })
}
