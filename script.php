<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $empfaenger = $_POST["empfaenger"];
    $betreff = $_POST["betreff"];
    $nachricht = $_POST["nachricht"];

    // E-Mail-Versand
    $from = "thomas.meyer1984@web.de"; // Absenderadresse (ersetze sie durch deine eigene)
    $headers = "From: $from";

    if (mail($empfaenger, $betreff, $nachricht, $headers)) {
        echo "Die E-Mail wurde erfolgreich gesendet.";
    } else {
        echo "Die E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut.";
    }
}
?>
