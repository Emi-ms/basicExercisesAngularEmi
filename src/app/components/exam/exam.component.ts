import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { EMPLOYEE_LIST } from '../../employee-list';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass],
  template: `
  <div class="registration-form">
    <h2>Login</h2>
    <div class="form-wrapper">
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <label for="name">Name
          <input  type="text" id="name" formControlName="name" [ngClass]="{ 'is-invalid': registrationForm.controls.name.invalid && registrationForm.controls.name.touched  }">
      </label>  
      <label for="position">Position
          <input type="text" id="position" formControlName="position" [ngClass]="{ 'is-invalid': registrationForm.controls.position.invalid && registrationForm.controls.position.touched }" required>
      </label>
      <label for="salary">Salary
          <input type="number" id="salary" formControlName="salary" [ngClass]="{ 'is-invalid': registrationForm.controls.salary.invalid && registrationForm.controls.salary.touched }" required>
      </label>
      <label for="department">Department
          <input type="text" id="department" formControlName="department" [ngClass]="{ 'is-invalid': registrationForm.controls.department.invalid && registrationForm.controls.department.touched }" required>
      </label>
      <button class="button" type="submit" [disabled]="registrationForm.invalid">Register</button>
    </form>
    </div>
  </div>
  `,
  styleUrl: './exam.component.css'
})

export class ExamComponent {
  employees: Employee[] = [];
  registrationForm = this.formBuilder.group({
    name: ['', Validators.pattern('^[a-zA-Z]+$')],
    position: ['', Validators.pattern('^[a-zA-Z]+$')],
    salary: [0, Validators.min(1000)],
    department: ['', Validators.pattern('^[a-zA-Z]+$')]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
  }

  onSubmit(): void {

    console.log(this.registrationForm.value);
    if (this.registrationForm.invalid) {
      alert('Please check the fields');
    } else {
      let name: string = this.registrationForm.value.name || '';
      let position: string = this.registrationForm.value.position || '';
      let salary: number = this.registrationForm.value.salary || 0;
      let department: string = this.registrationForm.value.department || '';
      const newEmployee: Employee = {
        name: name,
        position: position,
        salary: salary,
        department: department
      };
      this.employees.push(newEmployee);
    }
  }
}
