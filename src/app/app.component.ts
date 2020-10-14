import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  title = 'ProudSmile';

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  ngAfterViewChecked() {
  }
}
