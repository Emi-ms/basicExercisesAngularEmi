import { Component } from '@angular/core';
import { Employee } from "../../employee";
import { EMPLOYEE_LIST } from "../../employee-list";
import { NgForOf } from "@angular/common";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type emplKey = keyof Employee;

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
  sortingCriteria:emplKey = 'name';

  constructor() { }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
  }

  sortEmployees(sortCriteria: string): void {
    console.log(sortCriteria);

    let key: emplKey = this.sortingCriteria;
    console.log(key);

    this.employees.sort((a:Employee, b:Employee) => a[key] > b[key] ? 1 : -1);

  }
}


