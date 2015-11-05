<?php
   $myfile = fopen("../CHATS/Chat_1", "r") or die("Unable to open file!");
    $contenido=fread($myfile,filesize("../CHATS/Chat_1"));
    echo "$contenido";
   /* if($contenido !=NULL){
    file_put_contents("../CHATS/Chat_1", " ");
    }*/
?>