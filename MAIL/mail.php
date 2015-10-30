<?php
$mensaje="Mensaje probando PHP ";
$cabecera="From: Heleodoro Medrano<carl0s_hele08@hotmail.com>";

$enviado=mail("proyecto.more@gmail.com","Bienvenida", $mensaje,$cabecera);

if($enviado){
  echo "Mensaje Enviado";
}
else{
  echo "--Mal--";
}
?>