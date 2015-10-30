/*Eventos click JS*/

$('#textBox').on('keyup', function(e) {
	 if (e.keyCode === 13){
	 	if($.trim($("#textBox").val()).length>0)
	 		writeFile();
	 	else
	 		alert("No hay mensajes!.. Desde JS<Enter>");	
	 }
});
$('#btn-Send').on('click', function(e) {
	if($.trim($("#textBox").val()).length>0)
	 	writeFile();
	else
		alert("No hay mensajes!.. Desde JS");
		
	var txt= document.getElementById("textBox");
  	 txt.focus();  	
});
function scrll(){
	//document.getElementById('site-messages').scrollTop =document.getElementById('site-messages').scrollHeight;
   //$( "div.site-messages" ).scrollTop( 300 );
   	$('#site-messages').scroll();
	$("#site-messages").animate({ scrollTop: 10000 }, 3000);
    //alert("aqui");
}