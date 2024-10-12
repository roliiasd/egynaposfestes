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
// Munkák költségadatai 2024
const workCosts = {
    "padloTakaras": { labor: 550, material: 300, description: "Padló takarása fóliával" },
    "homlokzatFestes": { labor: 2850, material: 0, description: "Homlokzat festés" },
    "tapetazas": { labor: 2500, material: 1500, description: "Tapétázás" },
    "gletteles": { labor: 1200, material: 300, description: "Glettelés" },
    "padloTakarasLaminalt": { labor: 550, material: 400, description: "Laminált padló takarása fóliával" },
    "padloBútorTakaras": { labor: 750, material: 350, description: "Padló és bútorok takarása fóliával" },
    "padloPapirTakaras": { labor: 850, material: 550, description: "Padló takarása fóliával és hullámpapírral" },
    "falkaparas": { labor: 1900, material: 0, description: "Falkaparás" },
    "tapetaBontas": { labor: 1300, material: 100, description: "Tapéta bontás" },
    "falfeluletMelyalapozasa": { labor: 500, material: 200, description: "Falfelület mélyalapozása" },
    "glettelesEgyReteg": { labor: 1250, material: 300, description: "Glettelés egy rétegben" },
    "glettelesKetReteg": { labor: 2250, material: 500, description: "Glettelés két rétegben" },
    "glettelesHaromReteg": { labor: 3100, material: 750, description: "Glettelés három rétegben" }
};

// Kalkulátor eseménykezelő
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza a form elküldését

    const workSelect = document.getElementById('workSelect').value;
    const areaInput = document.getElementById('areaInput').value;

    // Ellenőrizze, hogy a munkafolyamat ki van-e választva és van-e terület
    if (!workSelect || !areaInput || areaInput <= 0) {
        alert('Kérlek válassz munkafolyamatot és adj meg érvényes munkafelületet!');
        return;
    }

    const laborCost = workCosts[workSelect].labor;
    const materialCost = workCosts[workSelect].material;
    const area = parseFloat(areaInput);

    // Költség kiszámítása
    const totalLaborCost = laborCost * area;
    const totalMaterialCost = materialCost * area;
    const totalCost = totalLaborCost + totalMaterialCost;

    // Eredmény megjelenítése
    document.getElementById('resultDiv').innerHTML = 
        `A munkadíj: <strong>${totalLaborCost.toFixed(0)} Ft</strong><br>
        Az anyagdíj: <strong>${totalMaterialCost.toFixed(0)} Ft</strong><br>
        A teljes költség: <strong>${totalCost.toFixed(0)} Ft</strong>`;

    // Leírás megjelenítése
    const descriptionList = document.getElementById('descriptionList');
    descriptionList.innerHTML = ''; // Először töröljük a listát
    const descriptionText = workCosts[workSelect].description;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${descriptionText}:</strong> Munkadíj: ${laborCost} Ft/m², Anyagdíj: ${materialCost} Ft/m²`;
    descriptionList.appendChild(listItem);
});
