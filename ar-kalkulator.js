/* Általános alapok */
html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden; /* Megakadályozza a kilógást */
}

body {
    background-color: #2e2e2e;
    color: #ecf0f1;
    font-family: Arial, sans-serif;
}

/* Navbar stílus */
.navbar {
    background-color: #532727;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.nav-link {
    color: wheat !important;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
}

.nav-link:hover {
    color: #ff6600;
}

/* Pair-container */
.pair-container {
    display: flex;
    flex-direction: row; /* Alapértelmezett: sorirány */
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1000px;
    margin: 20px auto;
    padding: 15px;
    border: 1px solid #d4af37;
    border-radius: 8px;
    background-color: #4a4a4a;
    gap: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.work-item, .calculator-item {
    flex: 1;
    padding: 15px;
    border-radius: 8px;
    background-color: #4a4a4a;
    color: #ecf0f1;
    max-width: 100%;
}

/* Szövegek stílusa */
.work-item h3 {
    color: #d4af37;
    font-weight: bold;
}

.work-item p, .calculator-item p {
    color: #ecf0f1;
}

/* Result stílus */
.result {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    color: wheat;
}
.result-container {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: wheat;
    padding: 10px;
    display: none; /* Initially hidden */
    border-radius: 10px;
    z-index: 100;
}

/* "Tetejére" és "Vissza" gomb */
#tetejereGomb {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 28pt;
    z-index: 1000;
}

#tetejereGomb:hover {
    color: #b8860b;
    transform: scale(1.15);
}

#vissza {
    color: white;
    font-weight: bold;
    background-color: #5c5c5c;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    margin-right: 15px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.3s ease;
}

#vissza:hover {
    background-color: #b8860b;
    transform: scale(1.05);
}

/* Reszponzív nézet kisebb képernyőkre */
@media (max-width: 768px) {
    .pair-container {
        flex-direction: column;
        padding: 10px;
    }

    .work-item, .calculator-item {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .work-item h3 {
        font-size: 1rem;
    }

    .form-group label {
        font-size: 0.9rem;
    }

    .form-control {
        padding: 8px;
    }

    #tetejereGomb {
        font-size: 24px;
        bottom: 15px;
        right: 15px;
    }
}
