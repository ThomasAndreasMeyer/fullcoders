// Funktion, um das Element beim Scrollen einzublenden
function showTextOnScroll() {
    const textElement = document.getElementById('fullCoders');
    const parallaxSections = document.querySelectorAll('.parallax');

    parallaxSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            textElement.classList.remove('hidden');
        } else {
            textElement.classList.add('hidden');
        }
    });
}

// Führe die Funktion beim Laden der Seite und beim Scrollen aus
window.addEventListener('load', showTextOnScroll);
window.addEventListener('scroll', showTextOnScroll);
