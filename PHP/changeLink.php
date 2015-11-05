<?php
function modLink($msj){
	$string = strtoupper($msj);
	$token = strtok($msj, " ");	
	$ini=substr($string, 0, 4 );
	$end=substr($string, -4 );
	$reback="";

		while ($token !== false)
		    {	
		    	if($ini== "HTTP"){
						$reback=$reback." <a href='$token' target='_blank'>$token</a> ";
				}else if($ini=="WWW." || $end==".COM" || $end==".MX" || $end==".ES" || $end==".US" || $end==".LY" || $end==".NET"){
					$reback=$reback." <a href='http://$token' target='_blank'>$token</a> ";
				}else{	
				    $reback=$reback." $token ";
				}
		    $token = strtok(" ");
		    }
		return $reback;
	}
?>

