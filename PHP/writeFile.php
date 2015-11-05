<?php

include "changeLink.php";
include "time.php";

$id=$_POST['id'];
$contenido=$_POST['Contenido'];
if(mensajeVacio($contenido)){
	echo "Contenido Vacio";
}else{
	$fichero = "../CHATS/Chat_1";//archivo PHP a modificar

	// Abre el fichero para obtener el contenido existente
	$actual = file_get_contents($fichero);
	$longitud=strlen($contenido);
		if($longitud>70){
			$contenido="--Contenido muy Largo--";
		}
	//Modifica el contenido en caso de ser un Link
	$contenido=modLink($contenido);
	//Le agrega eltag de tiempo
	$tm=timeSrv();

	// Añade una nueva linea al fichero tiempo
	$actual .= "\n$contenido $tm $id";

	// Escribe el contenido al fichero
	file_put_contents($fichero, $actual);
	echo "OK";
}

function mensajeVacio($question){
    return (!isset($question) || trim($question)==='');
}
?>