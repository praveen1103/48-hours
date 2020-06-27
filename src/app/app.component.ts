import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'My First Heading';
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
  age: number = 19;
  flag: boolean =  false;
  age1: number = 10;

  rating: number = 0

  plusRating() {
    if(this.rating < 10)
      this.rating++;
  }

  minusRating() {
    if(this.rating > 0) {
      this.rating--;
    }
  }
}
