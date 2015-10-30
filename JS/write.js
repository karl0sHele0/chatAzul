/*****************************************OLD******WRITE.JS*****/
var xbool=true;
var countR=0;
var myTiming;

function writeFile() {
  if(xbool==true && $('#textBox').val() != ''){  
    xbool=false;  
    document.getElementById("btn-Send").style.background='#c0392b';                
    countR++;
    getTimer();

  $.ajax({ 
      type: "POST", 
      url: "./PHP/writeFile.php", 
      data: "Contenido="+document.getElementById('textBox').value+"&id="+checkCookie(), 
          success: function(msg)
          { 
          //alert( "Respuesta del PHP: " + msg ); // poner palomitas 
             var textbox = document.getElementById("textBox");
             //textbox.focus();
             var elem = document.getElementById("textBox");
             elem.value = "";
             //alert("Mensaje enviado!..");
                          }
    }); countR=0; 
  }             
}


function myTimer(){
  xbool=true;
  document.getElementById("btn-Send").style.background='#20D3CA';
  clearInterval(myTiming);
}
function getTimer(){
  if(countR==1){
   myTiming=setInterval(function () {myTimer()}, 1700);
  }
}
/**************************End****WRITE**********************************/