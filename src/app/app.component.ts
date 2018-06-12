import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show: boolean = false;
  arrs: Array<any> = [];
  time: string = '';
  state: string = '';
  classColor: string = 'red';
  public colorstring: string;

  displayText() {
    if (this.show === false) {
    this.show = true;
    } else {
      this.show = false;
    }
    this.pushArr();
  }

  pushArr() {
    this.arrs.push({
      time: Date(),
      state: this.show
    });
  }

}
