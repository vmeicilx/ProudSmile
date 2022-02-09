<?php

require 'PHPMailer/class.phpmailer.php';

$name=$_POST['name'];
$email=$_POST['email'];
$msg=$_POST['message'];
$company=$_POST['company'];
$phone=$_POST['phone'];
$subject="Mail from $name";
   
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
        
$mail->MsgHTML("Company: $company, phone: $phone, message: $msg");
$mail->IsHTML(true); 

$countfiles = count($_FILES['file']['name']);
$abc = microtime();
for($i=0;$i<$countfiles;$i++){
    $filename = $_FILES['file']['name'][$i];
    $tempfilename = $_FILES['file']['tmp_name'][$i];
    $path = "upload/$abc".$filename;
    move_uploaded_file($tempfilename,$path);
    $mail->AddAttachment($path,$filename);
}

if(!$mail->Send())
{
    echo "Mail Not Sent";
}
else
{
    echo "Mail Sent";
         
} 
?>