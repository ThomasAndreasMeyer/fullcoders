// Funktion, um das Element beim Scrollen einzublenden
function showTextOnScroll() {
    const textElement = document.getElementById('fullCoders');
    const parallaxSections = document.querySelectorAll('.parallax');

    parallaxSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            textElement.classList.add('hidden');
        } else {
            textElement.classList.remove('hidden');
        }
    });
}



// Führe die Funktion showTextOnScroll beim Laden der Seite und beim Scrollen aus
window.addEventListener('load', showTextOnScroll);
window.addEventListener('scroll', showTextOnScroll);

// JavaScript-Funktion, um die Sprache basierend auf der Auswahl im Dropdown-Menü zu ändern
function changeLanguage(selectedLanguage, page) {
    var languageMap = {
        'en': 'https://thomasandreasmeyer.github.io/fullcoders/en/',
        'de': 'https://thomasandreasmeyer.github.io/fullcoders/de/',
        'pl': 'https://thomasandreasmeyer.github.io/fullcoders/'
    };

    var url = languageMap[selectedLanguage] + page + '.html';
    window.location.href = url;
}

// Sprache für die Webentwicklung ändern
changeLanguage('en', 'webdevelopment'); // Englische Version der Webentwicklungsseite

// Sprache für die SEO-Seite ändern
changeLanguage('de', 'seo'); // Deutsche Version der SEO-Seite
