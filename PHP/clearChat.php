<?php
$fichero = "../CHATS/Chat_1";//archivo PHP a modificar

$contenido="Bienvenid@ a Blue CHAT!... ##:## 000
Puedes Enviar un Mensaje!... ##:## 000";


// Escribe el contenido al fichero
file_put_contents($fichero, $contenido);
header('Location: ../index.html');//Modificar al mover de Servidor o  IP
?>