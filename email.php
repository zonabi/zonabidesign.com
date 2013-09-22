<?php 
$sendTo = "design@zonabi.com"; 
$subject = "[zonabidesign] contact form submission";

$headers = "From: " . $_POST["name"]; 
$headers .= "<" . $_POST["email"] . ">\r\n"; 
$headers .= "Reply-To: " . $_POST["email"] . "\r\n"; 
$headers .= "Return-Path: " . $_POST["email"]; 
$message = $_POST["message"]; 

mail($sendTo, $subject, $message, $headers); 

header("Location: http://www.zonabidesign.com/");
exit;
?> 
