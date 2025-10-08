window.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.append(container);
  const h1 = document.createElement("h1");
  h1.textContent = "SZIA. CSÁCSUMI. HELÓ. ÜDVÖZLETEM.";
  h1.style.textAlign = "left";
  h1.style.fontSize = "6rem";
  h1.style.color = "#000";
  h1.style.margin = "20px";
  const h12 = document.createElement("h1");
  h12.textContent = "adj penzt cigany:";
  const moneyLink = document.createElement("a");
  moneyLink.textContent = "Buy me a coffee";
  moneyLink.href = "https://buymeacoffee.com/rlnd";
  moneyLink.target = "_blank";
  moneyLink.style.fontSize = "120pt";

  container.append(h1, h12, moneyLink);

  //   const aLink = document.createElement("a");
  //   aLink.href = "index.html";
  //   aLink.textContent = "Vissza a főoldalra";
  //   aLink.id = "vissza";
  //   const container = document.createElement("div");
  //   container.classList.add("container");
  //   const p = document.createElement("p");
  //   p.textContent = "pici támogatás";
  //   const moneyLink = document.createElement("a");
  //   moneyLink.textContent = "Buy me a coffee";
  //   moneyLink.href = "https: www.buymeacoffee.com/rlnd";
  //   moneyLink.target = "_blank";
  //   moneyLink.classList.add("bmc-button");
  //   const footer = document.createElement("footer");
  //   footer.textContent = "Made with ❤️ by Roland";

  //   const gif = document.createElement("img");
  //   gif.src = "tumblr_4d4e0aef487815126dae8714e749027c_50b8312a_500.gif";
  //   gif.alt = "Loading...";
  //   gif.classList.add("gif");

  //   container.append(p, moneyLink);
  //   window.document.body.append(aLink, container, footer, gif);
});
