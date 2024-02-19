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
    // switch (sortCriteria) {
    //   case 'name':
    //     this.employees.sort((a, b) => a.name.localeCompare(b.name));
    //     break;
    //   case 'position':
    //     this.employees.sort((a, b) => a.position.localeCompare(b.position));
    //     break;
    //   case 'salary':
    //     this.employees.sort((a, b) => a.salary - b.salary);
    //     break;
    //   default:
    //     break;
    // }
    // type emplKey = keyof Employee;
    let key: emplKey = this.sortingCriteria;
    console.log(key);

    this.employees.sort((a:Employee, b:Employee) => a[key] > b[key] ? 1 : -1);

  }
}


