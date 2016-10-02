import { Component } from '@angular/core';
import * as Enumerable from 'linq-es2015'; // That worked with angular 2 Beta17 and angular cli using systemJS
// I also tried: import { asEnumerable } from 'linq-es2015'; does not work either

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' app works!';
  items = Array.from("123");
  number1: string;
  ngOnInit() {
    this.number1 = Enumerable.AsEnumerable(this.items).First();
  }
}
