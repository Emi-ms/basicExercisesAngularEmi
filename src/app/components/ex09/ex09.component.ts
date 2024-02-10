import { Component } from '@angular/core';
import {Employee} from "../../employee";
import {EMPLOYEE_LIST} from "../../employee-list";
import {NgForOf} from "@angular/common";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    FormsModule
    
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
  employees: Employee[] = [];
  sortingCriteria: string = '';

  constructor() { }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
  }

  sortEmployees(sortCriteria:string): void {
    console.log(sortCriteria);
    switch (sortCriteria) {
      case 'name':
        this.employees.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'position':
        this.employees.sort((a, b) => a.position.localeCompare(b.position));
        break;
      case 'salary':
        this.employees.sort((a, b) => a.salary - b.salary);
        break;
      default:
        break;
    }
  }
}
