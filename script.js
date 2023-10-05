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

// sequenz von Bildern
$(document).ready(function () {
    const imageSequence = [
        { imageSrc: 'https://picsum.photos/200', text: 'Bild 1' },
        { imageSrc: 'https://picsum.photos/200', text: 'Bild 2' },
        { imageSrc: 'https://picsum.photos/200', text: 'Bild 3' },
        { imageSrc: 'https://picsum.photos/200', text: 'Bild 4' },
        { imageSrc: 'https://picsum.photos/200', text: 'Bild 5' },
        { imageSrc: 'https://picsum.photos/200', text: 'Bild 6' },
    ];

    let currentIndex = 0;

    function showImage(index) {
        if (index >= imageSequence.length) {
            return;
        }

        const imageData = imageSequence[index];

        const imageCard = document.createElement('div');
        imageCard.classList.add('col-md-4', 'image-card');

        const image = document.createElement('img');
        image.classList.add('image');
        image.src = imageData.imageSrc;

        const text = document.createElement('p');
        text.textContent = imageData.text;

        imageCard.appendChild(image);
        imageCard.appendChild(text);

        $('#imageSequence').append(imageCard);

        $(imageCard).animate({ left: '0' }, 1000, function () {
            // Animation beendet, rufe die nächste Bildanzeige auf
            currentIndex++;
            showImage(currentIndex);
        });
    }

    // Starte die Bildanzeige
    showImage(currentIndex);
});
