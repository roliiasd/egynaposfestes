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






const tableBodyAlapMunkak = document.getElementById('tbody');
const trAlapMunkak = document.createElement('tr');
const divAlapMunkak = document.createElement('div');
const tdAlapMunkak = document.createElement('td');


window.addEventListener('DOMContentLoaded', getAlapMunkak => {

    tdAlapMunkak.innerHTML = 'Padló takarása fóliával, <br>szegélyek maszkolása krepp ragasztószalaggal';
    divAlapMunkak.style.marginTop = '10px'
    divAlapMunkak.style.fontStyle = 'italic';
    divAlapMunkak.style.color = '#555';
    divAlapMunkak.innerHTML = 'A festési munkálatok során védelmet biztosít a nem kívánt festékcseppek ellen bútorozott helyiségben.';
    tdAlapMunkak.append(divAlapMunkak);
    trAlapMunkak.append(tdAlapMunkak);
    tableBodyAlapMunkak.append(trAlapMunkak)
    
    
})

console.log(tableBodyAlapMunkak);
async function getAlapMunkak() {
    const response = await fetch('https://raw.githubusercontent.com/roliiasd/json-files/alapmunkak/alapmunkak.json');
    const data = await response.json();
    console.log(data);
    
  }