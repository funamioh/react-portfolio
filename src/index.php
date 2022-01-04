<?php

/*perform only when the form is submitted*/
if (isset($_POST['submit'])) {

    if(filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
    
    //submit the form
    $firsNname = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "funamiho1011@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$firstName."\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");

    $message_sent = true;
}
else {
    $message_sent = false;
}
}