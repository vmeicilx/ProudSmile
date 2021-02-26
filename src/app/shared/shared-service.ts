import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class SharedService {
  private subject = new Subject<any>();
  sendClickEvent(ev) {
    this.subject.next(ev);
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
