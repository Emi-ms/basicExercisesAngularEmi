import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex04.component.html',
  styleUrl: './ex04.component.css'
})
export class Ex04Component {
  n: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setNumber() {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

  incNumber() {
    this.n++;
    if (this.n > 10) {
      this.n = 0;
    }
  }

  decNumber() {
    this.n--;
    if (this.n < 0) {
      this.n = 10;
    }
  }
}
