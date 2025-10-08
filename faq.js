    document.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector("span");

        answer.classList.toggle("hidden");
        icon.textContent = answer.classList.contains("hidden") ? "+" : "−";
      });
    });
 
 // JSON betöltése
    fetch('faq.json')
      .then(response => response.json())
      .then(datagit => {
        const container = document.getElementById('faq-container');
        
        data.forEach(item => {
          // FAQ elem létrehozása
          const faqItem = document.createElement('div');
          faqItem.className = "bg-white rounded-2xl shadow p-4";

          const button = document.createElement('button');
          button.className = "w-full flex justify-between items-center font-semibold text-lg toggle-btn";
          button.innerHTML = `${item.question} <span class="text-gray-500">+</span>`;

          const answer = document.createElement('div');
          answer.className = "mt-2 hidden answer text-gray-700";
          answer.textContent = item.answer;

          button.addEventListener('click', () => {
            answer.classList.toggle('hidden');
            const icon = button.querySelector('span');
            icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
          });

          faqItem.appendChild(button);
          faqItem.appendChild(answer);
          container.appendChild(faqItem);
        });
      })
      .catch(error => console.error('Hiba a JSON betöltésekor:', error));