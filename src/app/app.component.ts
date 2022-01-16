import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  username: string = '';
  msg: string = '';
  password: string = '';
  isavailable: boolean = false;
  isavail: boolean = true;

  ngOnInit() {}
  check() {
    if (this.msg.length > 0 && this.password.length > 0) {
      this.msg = 'Hi ' + this.username;
      this.isavailable = true;
    } else {
      this.msg = 'Enter all the details ';
    }
  }
}
