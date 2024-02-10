import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
    ],
  templateUrl: './ex06.component.html',
  styles: `
  .ngInvalid{
    border: 2px solid red;
  }
  `
 // styleUrl: './ex06.component.css'
})
export class Ex06Component {
  celcius: string = '';
  fahrenheit: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.celcius = '';
    this.fahrenheit = '';
  }

  convertToCelcius() {
    if (!isNaN(Number(this.fahrenheit))) {
      this.celcius = (((Number(this.fahrenheit)) - 32) * 5 / 9).toString();
    } else {
      this.celcius = '';
    }
  }

  converToFahrenheit() {
    if (!isNaN(Number(this.celcius))) {
      this.fahrenheit = ((Number(this.celcius) * 9 / 5) + 32).toString();
    } else {
      this.fahrenheit = '';
    }
  }

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value));
}
}
