<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $nachricht = $_POST["nachricht"];

    // Empfänger-E-Mail-Adresse
    $empfaenger = "thomas.meyer1984@web.de"; // Hier die E-Mail-Adresse des Empfängers eintragen

    // Betreff und Nachricht
    $betreff = "Kontaktanfrage von $name";
    $nachricht = "Name: $name\n";
    $nachricht .= "E-Mail: $email\n\n";
    $nachricht .= "Nachricht:\n$nachricht";

    // E-Mail-Versand
    if (mail($empfaenger, $betreff, $nachricht)) {
        echo "Die Nachricht wurde erfolgreich gesendet. Vielen Dank, $name!";
    } else {
        echo "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.";
    }
}
?>
