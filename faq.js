    document.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector("span");

        answer.classList.toggle("hidden");
        icon.textContent = answer.classList.contains("hidden") ? "+" : "−";
      });
    });
 
   // FAQ data (would normally be loaded from external file)
        const faqs = [
            {
                question: "How do I reset my password?",
                answer: "You can reset your password by going to the login page and clicking on 'Forgot Password'. Follow the instructions sent to your email.",
                category: "Account"
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers.",
                category: "Billing"
            },
            {
                question: "Is there a mobile app available?",
                answer: "Yes! Our mobile app is available for both iOS and Android. You can download it from the App Store or Google Play Store.",
                category: "Mobile"
            },
            {
                question: "How can I contact customer support?",
                answer: "Our customer support team is available 24/7 via live chat on our website. You can also email us at support@example.com.",
                category: "Support"
            },
            {
                question: "What is your refund policy?",
                answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied, simply contact our support team.",
                category: "Billing"
            },
            {
                question: "Do you offer discounts for non-profits?",
                answer: "Yes, we offer special pricing for registered non-profit organizations. Please contact our sales team with your documentation.",
                category: "Pricing"
            }
        ];

        // Initialize Vanta.js background
        VANTA.NET({
            el: "#vanta-bg",
            color: 0x4c7cf3,
            backgroundColor: 0x111827,
            points: 12,
            maxDistance: 20,
            spacing: 15
        });

        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            loadFAQs();
        });

        function loadFAQs() {
            const container = document.getElementById('faq-container');
            const countElement = document.getElementById('faq-count');
            
            // Update count
            countElement.textContent = `${faqs.length} ${faqs.length === 1 ? 'question' : 'questions'}`;
            
            // Clear loading state
            container.innerHTML = '';
            
            // Add each FAQ item
            faqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item px-6 py-4 cursor-pointer';
                faqItem.innerHTML = `
                    <div class="flex items-start justify-between" onclick="toggleAnswer(${index})">
                        <div>
                            <h3 class="text-lg font-medium text-white flex items-start">
                                <span class="text-blue-400 mr-3">Q.</span>
                                ${faq.question}
                            </h3>
                            <div class="answer mt-2 text-gray-400 pl-8">
                                <p><span class="text-green-400 mr-2">A.</span>${faq.answer}</p>
                            </div>
                        </div>
                        <i data-feather="chevron-down" class="text-gray-500 transition-transform" id="chevron-${index}"></i>
                    </div>
                `;
                container.appendChild(faqItem);
            });
            
            feather.replace();
        }

        function toggleAnswer(index) {
            const answer = document.querySelectorAll('.answer')[index];
            const chevron = document.getElementById(`chevron-${index}`);
            
            answer.classList.toggle('active');
            
            if (answer.classList.contains('active')) {
                chevron.style.transform = 'rotate(180deg)';
            } else {
                chevron.style.transform = 'rotate(0deg)';
            }
        }
