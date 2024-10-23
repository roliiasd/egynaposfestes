//Lenyilo menu atalakito


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
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


//Ar kalkulator
//Ar kalkulator
//Ar kalkulator
//Ar kalkulator
//Ar kalkulator



document.addEventListener('DOMContentLoaded', function () {
    const areaInputs = document.querySelectorAll('.area-input');

    areaInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const munkadij = parseFloat(this.getAttribute('data-munkadij')) || 0;
            const anyagdij = parseFloat(this.getAttribute('data-anyagdij')) || 0;
            const terulet = parseFloat(this.value) || 0;
            const total = (munkadij + anyagdij) * terulet;
            const totalCostId = this.id.replace('area', 'totalCost');
            document.getElementById(totalCostId).textContent = total.toLocaleString('hu-HU') + ' Ft';
        });
    });
});




//galeria
//galeria
//galeria
//galeria
//galeria

$('.carousel').carousel({
    interval: 10000, // 5 másodpercenként vált
    ride: 'carousel',
    pause: 'hover',
    wrap: true
});
