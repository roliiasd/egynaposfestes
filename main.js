var animation = bodymovin.loadAnimation(){
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false, // Az animáció nem fog folyamatosan játszódni
    autoplay: false, // Az animáció nem fog automatikusan elindulni
    path: 'https://lottie.host/b1b417c3-2b7b-4a78-a9d7-93ff20fb2053/91gUdiXlPb.json'
});

// Kattintás esemény a hamburger gombhoz
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    // Ellenőrizzük, hogy a navbar nyitva van-e
    var isExpanded = this.getAttribute('aria-expanded') === 'true';

    // Ha nyitva van, akkor megállítjuk az animációt, és visszatérünk az alapállapotba
    if (isExpanded) {
        animation.stop(); // Leállítjuk az animációt, amikor bezárul
        animation.goToAndStop(0, true); // Visszaállítjuk az animációt az elejére
    } else {
        animation.play(); // Lejátszási animáció a megnyitáskor
    }
});
