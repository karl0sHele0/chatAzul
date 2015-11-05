/***cokies.js***/
function setCookie(cname,cvalue,exdays) {/*cookie name, cokie value, dias de expiracion*/
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {/*funcion regresar galleta, cookie Name*/
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {/*Checar las cookies*/
    var userId=getCookie("userId");/*regresa el valor de la galleta */
    if (userId != "") {
        /**/
    } else {
         userId=Math.floor(Math.random() * (999 - 101 + 1)) + 101;
         setCookie("userId", userId, 30);
    }
    return userId;
}