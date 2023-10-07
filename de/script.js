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

// JavaScript-Funktion zum Ändern der Sprache
function changeLanguageWebdev() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.value;

    // Überprüfen Sie die ausgewählte Sprache und aktualisieren Sie die URL entsprechend
    if (selectedLanguage === "pl") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/webdevelopment.html";
    } else if (selectedLanguage === "en") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/webdevelopment.html";
    } else if (selectedLanguage === "de") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/webdevelopment.html";
    }
}


// JavaScript-Funktion zum Ändern der Sprache
function changeLanguageOmnie() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.value;

    // Überprüfen Sie die ausgewählte Sprache und aktualisieren Sie die URL entsprechend
    if (selectedLanguage === "pl") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/omnie.html";
    } else if (selectedLanguage === "en") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/omnie.html";
    } else if (selectedLanguage === "de") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/omnie.html";
    }
}

// JavaScript-Funktion zum Ändern der Sprache
function changeLanguageIndex() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.value;

    // Überprüfen Sie die ausgewählte Sprache und aktualisieren Sie die URL entsprechend
    if (selectedLanguage === "pl") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/index.html";
    } else if (selectedLanguage === "en") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/index.html";
    } else if (selectedLanguage === "de") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/index.html";
    }
}

// JavaScript-Funktion zum Ändern der Sprache
function changeLanguageSeo() {
    var languageSelect = document.getElementById("language-select");
    var selectedLanguage = languageSelect.value;

    // Überprüfen Sie die ausgewählte Sprache und aktualisieren Sie die URL entsprechend
    if (selectedLanguage === "pl") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/seo.html";
    } else if (selectedLanguage === "en") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/en/seo.html";
    } else if (selectedLanguage === "de") {
        window.location.href = "https://thomasandreasmeyer.github.io/fullcoders/de/seo.html";
    }
}



