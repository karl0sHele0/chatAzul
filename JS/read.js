var newMsj="";
var oldMsj="";
var svMsj="";
var count=0;
var message=" ";
/****************SET Interval Function Read Lines and Write MSJs**************/
setInterval(function(){ 
 window.addEvent("domready",function(){ 

        var csvRequest = new Request({                         
            url:"./CHATS/Chat_1",
            onSuccess:function(data){
                if(count==0){/*Al iniciar la carga!.*/    
                    oldMsj=data;                     
                    var lines = data.split('\n');
                                              
                        for(var i = 0;i < lines.length;i++){                                                
                            var cnt=lines[i].substring(lines[i].lastIndexOf("\n"),lines[i].length);/*variable de contenido*/
                            var tm=cnt.substring(cnt.length -9,cnt.length -4);/*Variable de tiempo*/
                            var msjId=cnt.substring(cnt.length ,cnt.length -3);/*Variable de id del mensaje*/ 
                                if(tm=="##:##"){
                                tm="";
                                }
                                if(msjId!=checkCookie() && msjId!="000"){
                                    svMsj=svMsj+"<div id='bubble' class='bubble-red'><h3 class='me'><code>"+cnt.substring(cnt, cnt.length -11)+"</code></h3><div class='hour'>"+tm+"</div></div>";
                                }else{
                                    svMsj=svMsj+"<div id='bubble' class='bubble-four'><h3 class='me'><code>"+cnt.substring(cnt, cnt.length -11)+"</code></h3><div class='hour'>"+tm+"</div></div>";
                                }
                        }
                    document.getElementById("site-messages").innerHTML=svMsj;
                    scrll();
                    count++; 
                }else if(oldMsj!=data){/*Hay nuevos mensajes*/
                    oldMsj=data;
                    var cnt=data.substring(data.lastIndexOf("\n"),data.length - 11);/*variable de contenido*/
                    var tm=data.substring(data.length -9,data.length -4);/*Variable de tiempo*/
                    //alert(tm);
                    var youID=data.substring(data.length - 3);/*ID del mensaje*/
                    var myId=document.getElementById("numID").value;/*Id mio*/

                        if(youID!=myId && youID!="000"){/*Si llegan nuevos mensajes que no son mios*/
                            newMsj=newMsj+"<div id='bubble' class='bubble-red'><h3>"+
                            cnt+"</h3><div class='hour'>"+tm+"</div></div>";
                            var audio = new Audio("./Sound/snd.mp3");
                            audio.play(); 
                        }else if(youID!="000"){
                            newMsj=newMsj+"<div id='bubble' class='bubble-four'><h3 class='me'>"+
                            cnt+"</h3><div class='hour'>"+tm+"</div></div>";                                                    
                        }
                        else{/*si llegan mensajes 000 de codigo(alguien los reinicio)*/
                            if (confirm("Se han limpiado los mensajes, desea actualizar?") == true) {
                                       location.reload();/*Reinicia la pagina*/
                            }
                        }
                                                    document.getElementById("site-messages").innerHTML=svMsj+newMsj;
                                                    scrll();
                }        
            }
        }).send(); //End onSuccess
    });
},1000);

function read(){ 
    window.addEvent("domready",function(){ 

        var csvRequest = new Request({                         
            url:"./CHATS/Chat_1",
            onSuccess:function(data){
                if(count==0){/*Al iniciar la carga!.*/    
                    oldMsj=data;                     
                    var lines = data.split('\n');
                                              
                        for(var i = 0;i < lines.length;i++){                                                
                            var cnt=lines[i].substring(lines[i].lastIndexOf("\n"),lines[i].length);/*variable de contenido*/
                            var tm=cnt.substring(cnt.length -9,cnt.length -4);/*Variable de tiempo*/
                            var msjId=cnt.substring(cnt.length ,cnt.length -3);/*Variable de id del mensaje*/ 
                                if(tm=="##:##"){
                                tm="";
                                }
                                if(msjId!=checkCookie() && msjId!="000"){
                                    svMsj=svMsj+"<div id='bubble' class='bubble-red'><h3 class='me'>"+cnt.substring(cnt, cnt.length -11)+"</h3><div class='hour'>"+tm+"</div></div>";
                                }else{
                                    svMsj=svMsj+"<div id='bubble' class='bubble-four'><h3 class='me'>"+cnt.substring(cnt, cnt.length -11)+"</h3><div class='hour'>"+tm+"</div></div>";
                                }
                        }
                    document.getElementById("site-messages").innerHTML=svMsj;
                    scrll();
                    count++; 
                }else if(oldMsj!=data){/*Hay nuevos mensajes*/
                    oldMsj=data;
                    var cnt=data.substring(data.lastIndexOf("\n"),data.length - 11);/*variable de contenido*/
                    var tm=data.substring(data.length -9,data.length -4);/*Variable de tiempo*/
                    //alert(tm);
                    var youID=data.substring(data.length - 3);/*ID del mensaje*/
                    var myId=document.getElementById("numID").value;/*Id mio*/

                        if(youID!=myId && youID!="000"){/*Si llegan nuevos mensajes que no son mios*/
                            newMsj=newMsj+"<div id='bubble' class='bubble-red'><h3>"+
                            cnt+"</h3><div class='hour'>"+tm+"</div></div>";
                            var audio = new Audio("./Sound/snd.mp3");
                            audio.play(); 
                        }else if(youID!="000"){
                            newMsj=newMsj+"<div id='bubble' class='bubble-four'><h3 class='me'>"+
                            cnt+"</h3><div class='hour'>"+tm+"</div></div>";                                                    
                        }
                        else{/*si llegan mensajes 000 de codigo(alguien los reinicio)*/
                            if (confirm("Se han limpiado los mensajes, desea actualizar?") == true) {
                                       location.reload();/*Reinicia la pagina*/
                            }
                        }
                                                    document.getElementById("site-messages").innerHTML=svMsj+newMsj;
                                                    scrll();
                }        
            }
        }).send(); //End onSuccess
    });
}
/****************End Set Interval Function**************/