<?php

require 'PHPMailer/class.phpmailer.php';

$email=$_POST['email'];
$subject="Subscription request";
$msg="Email $email sent a subscription request!";
   
$mail = new PHPMailer(true); 

$mail->IsSMTP();                           
$mail->SMTPAuth   = false;                 
$mail->Port       = 25;                    
$mail->Host       = "localhost"; 
$mail->Username   = "proudsmile.server@mymed.online";   
$mail->Password   = "proudsmile";            
        
$mail->IsSendmail();  
        
$mail->From       = "proudsmile.server@mymed.online";
$mail->FromName   = "ProudSmile website";
       
$mail->AddAddress("bundall@proudsmile.com.au");
$mail->Subject  = $subject;
$mail->WordWrap   = 80; 
        
$mail->MsgHTML($msg);
$mail->IsHTML(true); 


if(!$mail->Send())
{
    echo "Mail Not Sent";
}
else
{
    echo "Mail Sent";
         
}
?>
        