import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmailData } from './EmailData';

@Injectable({
  providedIn: 'root',
})
export class emailService {
  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailData, files) {

    const formData = new FormData(); 
    
    formData.append("name", emailData.name);
    formData.append("email", emailData.email);
    formData.append("company", emailData.company);
    formData.append("phone", emailData.phone);
    formData.append("message", emailData.message);

    if(files) {
      for(var i=0;i<files.length;i++) {
        formData.append("file[]", files[i], files[i].name);
  
      }
    }
    return this.http.post(`send.php`, formData, {responseType: "text"});
  }

  subscribeEmail(email: string) {
    const formData = new FormData(); 
    formData.append("email", email);

    return this.http.post(`subscribe.php`, formData, {responseType: "text"});
  }
}