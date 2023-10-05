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

// Führe die Funktion beim Laden der Seite und beim Scrollen aus
window.addEventListener('load', showTextOnScroll);
window.addEventListener('scroll', showTextOnScroll);


        // JavaScript-Funktion, um die Sprache basierend auf der Auswahl im Dropdown-Menü zu ändern
        function changeLanguageIndex() {
            var selectElement = document.getElementById("language-select");
            var selectedLanguage = selectElement.value;
            
            // Hier können Sie den Code hinzufügen, um die Seite auf die ausgewählte Sprache umzuschalten,
            // indem Sie die URL entsprechend ändern oder den Inhalt dynamisch laden.
            
            // Beispiel:
            if (selectedLanguage === "en") {
                // Wenn Englisch ausgewählt wurde, leite zur englischen Version weiter.
                window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/index.html";
            } else if (selectedLanguage === "de") {
                // Wenn Deutsch ausgewählt wurde, leite zur deutschen Version weiter.
                window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/index.html";
            } else if (selectedLanguage === "pl") {
                // Wenn Polnisch ausgewählt wurde, leite zur polnischen Version weiter.
                window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/index.html";
            }
        }
   
// Führe die Funktion beim Laden der Seite und beim Scrollen aus
window.addEventListener('load', showTextOnScroll);
window.addEventListener('scroll', showTextOnScroll);


     // JavaScript-Funktion, um die Sprache basierend auf der Auswahl im Dropdown-Menü zu ändern
     function changeLanguageWebdev() {
        var selectElement = document.getElementById("language-select");
        var selectedLanguage = selectElement.value;
        
        // Hier können Sie den Code hinzufügen, um die Seite auf die ausgewählte Sprache umzuschalten,
        // indem Sie die URL entsprechend ändern oder den Inhalt dynamisch laden.
        
        // Beispiel:
        if (selectedLanguage === "en") {
            // Wenn Englisch ausgewählt wurde, leite zur englischen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/webdevelopment.html";
        } else if (selectedLanguage === "de") {
            // Wenn Deutsch ausgewählt wurde, leite zur deutschen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/webdevelopment.html";
        } else if (selectedLanguage === "pl") {
            // Wenn Polnisch ausgewählt wurde, leite zur polnischen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/webdevelopment.html";
        }
    }


        // Führe die Funktion beim Laden der Seite und beim Scrollen aus
window.addEventListener('load', showTextOnScroll);
window.addEventListener('scroll', showTextOnScroll);


        // JavaScript-Funktion, um die Sprache basierend auf der Auswahl im Dropdown-Menü zu ändern
        function changeLanguageSeo() {
            var selectElement = document.getElementById("language-select");
            var selectedLanguage = selectElement.value;
            
            // Hier können Sie den Code hinzufügen, um die Seite auf die ausgewählte Sprache umzuschalten,
            // indem Sie die URL entsprechend ändern oder den Inhalt dynamisch laden.
            
           // Beispiel:
        if (selectedLanguage === "en") {
            // Wenn Englisch ausgewählt wurde, leite zur englischen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/seo.html";
        } else if (selectedLanguage === "de") {
            // Wenn Deutsch ausgewählt wurde, leite zur deutschen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/seo.html";
        } else if (selectedLanguage === "pl") {
            // Wenn Polnisch ausgewählt wurde, leite zur polnischen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/seo.html";
        }
    }


        // Führe die Funktion beim Laden der Seite und beim Scrollen aus
window.addEventListener('load', showTextOnScroll);
window.addEventListener('scroll', showTextOnScroll);


        // JavaScript-Funktion, um die Sprache basierend auf der Auswahl im Dropdown-Menü zu ändern
        function changeLanguageOmnie() {
            var selectElement = document.getElementById("language-select");
            var selectedLanguage = selectElement.value;
            
            // Hier können Sie den Code hinzufügen, um die Seite auf die ausgewählte Sprache umzuschalten,
            // indem Sie die URL entsprechend ändern oder den Inhalt dynamisch laden.
            
           // Beispiel:
        if (selectedLanguage === "en") {
            // Wenn Englisch ausgewählt wurde, leite zur englischen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/omnie.html";
        } else if (selectedLanguage === "de") {
            // Wenn Deutsch ausgewählt wurde, leite zur deutschen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/omnie.html";
        } else if (selectedLanguage === "pl") {
            // Wenn Polnisch ausgewählt wurde, leite zur polnischen Version weiter.
            window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/omnie.html";
        }
    }

