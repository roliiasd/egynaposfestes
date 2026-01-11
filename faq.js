async function loadFAQs() {
        try {
          const response = await fetch("https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/faq/faq.json");
          const faqs = await response.json();

          const container = document.getElementById("faq-container");
          container.innerHTML = "";

          faqs.forEach((item, index) => {
            const faqItem = document.createElement("div");
            faqItem.className =
              "border border-orange-500 rounded-xl overflow-hidden bg-zinc-900 shadow-lg";

            faqItem.innerHTML = `
            <button 
              class="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-orange-500/10 transition-colors"
              onclick="toggleAnswer(${index})"
            >
              <span class="font-semibold text-lg">${item.question}</span>
              <span id="icon-${index}" class="text-orange-500 text-2xl leading-none">+</span>
            </button>
            <div id="answer-${index}" class="hidden px-5 pb-5 text-gray-300">
              ${item.answer}
            </div>
          `;
            container.appendChild(faqItem);
          });
        } catch (error) {
          console.error("Hiba a FAQ betöltése közben:", error);
        }
      }

      // Válasz megjelenítése/elrejtése
      function toggleAnswer(index) {
        const answer = document.getElementById(`answer-${index}`);
        const icon = document.getElementById(`icon-${index}`);
        const isHidden = answer.classList.contains("hidden");

        document
          .querySelectorAll('[id^="answer-"]')
          .forEach((a) => a.classList.add("hidden"));
        document
          .querySelectorAll('[id^="icon-"]')
          .forEach((i) => (i.textContent = "+"));

        if (isHidden) {
          answer.classList.remove("hidden");
          icon.textContent = "−";
        }
      }

      // Betöltés indítása
      loadFAQs();