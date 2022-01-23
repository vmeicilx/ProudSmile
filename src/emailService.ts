import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { EmailData } from './EmailData';

@Injectable({
  providedIn: 'root',
})
export class emailService {
  baseUrl = 'send.php';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailData) {
    return this.http.post(`${this.baseUrl}`, { data: emailData }, {responseType: "text"});
    // return this.http.post(`${this.baseUrl}`, { data: emailData }).pipe(
    //   map((res: any) => {
    //     return res['data'];
    //   })
    // );
  }
}