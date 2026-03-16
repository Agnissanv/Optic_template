/* ==========================================================================
   APP.JS - L'intelligence du tunnel de vente
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTION DU HEADER AU SCROLL
    // Ajoute une ombre au menu quand on commence à défiler pour garder une structure claire
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '15px 0';
        }
    });

    // 2. ANIMATION D'APPARITION (REVEAL ON SCROLL)
const revealElements = document.querySelectorAll('.service-card, .review-card, .hero-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // On ajoute une classe au lieu de modifier le style en dur
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    // Ajoute la classe initiale ici
    el.classList.add('reveal-hidden');
    revealObserver.observe(el);
});

    // 3. GESTION DU FORMULAIRE DE CONTACT (CONVERSION)
    // On simule l'envoi pour la démo, prêt à être connecté à Formspree
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // On bloque l'envoi classique
            
            const btn = contactForm.querySelector('button');
            btn.innerText = "Envoi en cours...";
            btn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    // Succès : Affiche le message de confirmation
                    contactForm.innerHTML = `
                        <div style="text-align: center; padding: 20px;">
                            <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: #CBAA5C; margin-bottom: 15px;"></i>
                            <h3>Demande bien reçue !</h3>
                            <p>L'équipe du cabinet vous contactera rapidement.</p>
                        </div>
                    `;
                } else {
                    throw new Error("Erreur lors de l'envoi");
                }
            } catch (error) {
                btn.innerText = "Erreur, réessayez";
                btn.disabled = false;
            }
        });
    }

    // 4. SMART CONTACT (Optionnel mais puissant pour Marcory)
    // Si l'utilisateur clique sur le numéro de téléphone, on peut tracker l'action
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink) {
        phoneLink.addEventListener('click', () => {
            console.log("Appel direct déclenché");
            // Ici tu pourrais ajouter un pixel de conversion (Facebook/Google)
        });
    }
});








var swiper = new Swiper(".news-cont", {
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            568: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
            
           
        },
            
    });