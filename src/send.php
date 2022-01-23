<?php
require 'PHPMailer/class.phpmailer.php';

if(isset($_POST['send']))
{
      $file_name = $_FILES['file']['name'];
      $file_tmp =$_FILES['file']['tmp_name'];
      
        $abc=microtime();
        $path="upload/$abc".$file_name;
        move_uploaded_file($file_tmp,$path);
         
         
            $name=$_POST['name'];
            $email=$_POST['email'];
            $msg=$_POST['message'];
            $subject="Email from $name";
    
            $mail = new PHPMailer(true); 

        	$mail->IsSMTP();                           
        	$mail->SMTPAuth   = false;                 
        	$mail->Port       = 25;                    
        	$mail->Host       = "localhost"; 
        	$mail->Username   = "vlad.meici@mymed.online";   
        	$mail->Password   = "proudsmile";            
        
        	$mail->IsSendmail();  
        
        	$mail->From       = $email;
        	$mail->FromName   = $name;
        
        	$mail->AddAddress("vlad.meici@mymed.online");
            $mail->Subject  = $subject;
        	$mail->WordWrap   = 80; 
        
            $mail->MsgHTML($msg);
        	$mail->IsHTML(true); 
            $mail->AddAttachment($path,$file_name);
         
         
            if(!$mail->Send())
            {
                   echo "Mail Not Sent";
            }
            else
            {
               	echo '<script language="javascript">';
    	        echo 'alert("Thank You Contacting Us We Will Response You As Early Possible")';
    	        echo '</script>';
         
            } 
        	
}        	    
        