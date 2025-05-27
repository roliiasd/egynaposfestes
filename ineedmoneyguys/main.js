window.addEventListener('DOMContentLoaded', () => {
    const aLink = document.createElement('a');
    aLink.href = '../index.html';
    aLink.textContent = 'Vissza a főoldalra';
    aLink.id = 'vissza';
    const container = document.createElement('div');
    container.classList.add('container');
    const p = document.createElement('p');
    p.textContent = 'pici támogatás';
    const moneyLink = document.createElement('a');
    moneyLink.textContent = 'Buy me a coffee';
    moneyLink.href = 'https://www.buymeacoffee.com/rlnd';
    moneyLink.target = '_blank';
    moneyLink.classList.add('bmc-button');
    const footer = document.createElement('footer');
    footer.textContent = 'Made with ❤️ by Roland';

    const gif = document.createElement('img');
    gif.src = 'tumblr_4d4e0aef487815126dae8714e749027c_50b8312a_500.gif';
    gif.alt = 'Loading...';
    gif.classList.add('gif');

    container.append(p, moneyLink);
    window.document.body.append(aLink, container, footer, gif);

});
