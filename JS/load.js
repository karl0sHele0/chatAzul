function cargar(){
 	reacoplar(); 
 	document.getElementById("numID").value=checkCookie();
 	read();
 }

 function reacoplar(){
 	var alto=Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 	var ancho=Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

 	if(ancho>300 && ancho<400 && alto>450 && alto<700){
		document.getElementById("site-header").setAttribute( "style","height:7%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:7%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:7%;");
 		document.getElementById("site-content").setAttribute( "style","top:7%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:7%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px;  font-style: italic; color:#20D3CA; top:90%; width:50%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:90%; font-size: 24px; font-style: italic; width:10%;");
	}
	else if(ancho>=400 && ancho<470 && alto>=700 && alto<800){
		document.getElementById("site-header").setAttribute( "style","height:7%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:7%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:7%;");
 		document.getElementById("site-content").setAttribute( "style","top:7%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:7%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:90%; width:53%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:90%; font-size: 24px; font-style: italic; width:10%;");
		
	}
	else if(ancho>=470 && ancho<500 && alto>300 && alto<500){/*This*/
		document.getElementById("site-header").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:9%;");
 		document.getElementById("site-content").setAttribute( "style","top:9%; height:78%;");
 		document.getElementById("site-messages").setAttribute( "style","top:9%; height:78%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:88%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:88%; font-size: 24px; font-style: italic; width:10%; left:90%;");
	}
	else if(ancho>200 && ancho<=320 && alto>200 && alto<=450){
		document.getElementById("site-header").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:9%;");
 		document.getElementById("site-content").setAttribute( "style","top:9%; height:0%; width:0%;");
 		document.getElementById("site-messages").setAttribute( "style","top:9%; height:78%; left:0%; width:100%;");
		document.getElementById("textBox").setAttribute("style","font-size: 17px; font-style: italic; color:#20D3CA; top:88%; left:5%; width:70%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:88%; font-size: 17px; font-style: italic; width:10%; left:82%; width:15%;");
	}
	else if(ancho>=400 && ancho<=500 && alto>600 && alto<=800){
		document.getElementById("site-header").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:9%;");
 		document.getElementById("site-content").setAttribute( "style","top:9%; height:78%;");
 		document.getElementById("site-messages").setAttribute( "style","top:9%; height:78%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:90%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:90%; font-size: 24px; font-style: italic; left:90%; width:10%;");
	}
	else if(ancho>=600 && ancho<=800 && alto>950 && alto<=1400){
		document.getElementById("site-header").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:9%;");
 		document.getElementById("site-content").setAttribute( "style","top:9%; height:78%;");
 		document.getElementById("site-messages").setAttribute( "style","top:9%; height:78%;");
		document.getElementById("textBox").setAttribute("style","font-size: 30px; font-style: italic; color:#20D3CA; top:90%; bottom:6%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:90%; font-size: 30px; font-style: italic; left:90%; width:10%; bottom:6%;");
	}
	else if(ancho>=900 && ancho<=1400 && alto>500 && alto<=800){
		document.getElementById("site-header").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:9%;");
 		document.getElementById("site-content").setAttribute( "style","top:9%; height:78%;");
 		document.getElementById("site-messages").setAttribute( "style","top:9%; height:78%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:90%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:90%; font-size: 24px; font-style: italic; left:90%; width:10%;");
	}
	else if(ancho>=450 && alto>450){
		document.getElementById("site-header").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:9%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:9%;");
 		document.getElementById("site-content").setAttribute( "style","top:9%; height:78%;");
 		document.getElementById("site-messages").setAttribute( "style","top:9%; height:78%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:90%;");
		document.getElementById("site-footer").setAttribute( "style","top:87%;");
		document.getElementById("btn-Send").setAttribute( "style","top:90%; font-size: 24px; font-style: italic; left:90%; width:10%;");
		
	}
	else if(alto<100 && ancho >200 ){
		document.getElementById("site-header").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:0%;");
 		document.getElementById("site-content").setAttribute( "style","top:0%; height:0%;");
 		document.getElementById("site-messages").setAttribute( "style","top:0%; height:0%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:20%; bottom:20%;");
		document.getElementById("site-footer").setAttribute( "style","top:0%;");
		document.getElementById("btn-Send").setAttribute( "style","top:20%; font-size: 24px; font-style: italic; left:90%; width:10%; bottom:18%;");
	}
	else if(ancho>200 && ancho<500 && alto>=100 && alto<500 ){
		document.getElementById("site-header").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:0%;");
 		document.getElementById("site-content").setAttribute( "style","top:0%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:0%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 18px; font-style: italic; color:#20D3CA; top:81%; bottom:3%;");
		document.getElementById("site-footer").setAttribute( "style","top:80%;");
		document.getElementById("btn-Send").setAttribute("style","top:81%; font-size: 18px; font-style: italic; left:90%; width:10%; bottom:2%;");
	}
	else if(ancho>800 && ancho<1200 && alto>=100 && alto<500 ){
		document.getElementById("site-header").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:0%;");
 		document.getElementById("site-content").setAttribute( "style","top:0%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:0%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 18px; font-style: italic; color:#20D3CA; top:81%; bottom:6%;");
		document.getElementById("site-footer").setAttribute( "style","top:80%;");
		document.getElementById("btn-Send").setAttribute("style","top:81%; font-size: 18px; font-style: italic; left:90%; width:10%; bottom:5%;");
	}
	else if(ancho>800 && ancho<1366 && alto>=300 && alto<500 ){
		document.getElementById("site-header").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:0%;");
 		document.getElementById("site-content").setAttribute( "style","top:0%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:0%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 18px; font-style: italic; color:#20D3CA; top:81%; bottom:10%;");
		document.getElementById("site-footer").setAttribute( "style","top:80%;");
		document.getElementById("btn-Send").setAttribute("style","top:81%; font-size: 18px; font-style: italic; left:90%; width:10%; bottom:9%;");
	}
	else if(ancho>800 && ancho<1366 && alto>=300 && alto<500 ){
		document.getElementById("site-header").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:0%;");
 		document.getElementById("site-content").setAttribute( "style","top:0%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:0%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 18px; font-style: italic; color:#20D3CA; top:81%; bottom:10%;");
		document.getElementById("site-footer").setAttribute( "style","top:80%;");
		document.getElementById("btn-Send").setAttribute("style","top:81%; font-size: 18px; font-style: italic; left:90%; width:10%; bottom:9%;");
	}
	else if(ancho>400 && ancho<750 && alto>=300 && alto<500 ){
		document.getElementById("site-header").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Img").setAttribute( "style","height:0%;");
 		document.getElementById("btn-Clr").setAttribute( "style","height:0%;");
 		document.getElementById("site-content").setAttribute( "style","top:0%; height:80%;");
 		document.getElementById("site-messages").setAttribute( "style","top:0%; height:80%;");
		document.getElementById("textBox").setAttribute("style","font-size: 24px; font-style: italic; color:#20D3CA; top:85%;");
		document.getElementById("site-footer").setAttribute( "style","top:80%;");
		document.getElementById("btn-Send").setAttribute("style","top:85%; font-size: 24px; font-style: italic; left:90%; width:9%; ");
	}
	else{
		document.getElementById("site-content").innerHTML= "<h1 style='color:white'>Blue Chat</h1><br><h3>Disponible en Chrome & Firefox</h3>";
		document.getElementById("site-content").innerHTML =document.getElementById("site-content").innerHTML+ ancho+"x"+alto+"<br>RESOLUCION NO ADMITIDAAAA";
	}
	
 }
 window.addEventListener('resize', function(event){
 	reacoplar(); 
});