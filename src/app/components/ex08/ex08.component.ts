import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-ex08',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './ex08.component.html'
})
export class Ex08Component {
  numbers: number[] = [];
  fruits: string[] = [];

  num: number = 0;
  fruit: string = '';

  constructor() { }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55].sort((a, b) => a - b);
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"]
      .map(fruit => fruit.toUpperCase())
      .sort((a, b) => a.localeCompare(b));

  }

  insNumber() {
    this.numbers.push(this.num);
    this.num = 0;
    this.numbers.sort((a, b) => a - b);
  }

  insFruit() {
    this.fruits.push(this.fruit.toUpperCase());
    this.fruits.sort((a, b) => a.localeCompare(b));
    this.fruit = '';
  }
}
