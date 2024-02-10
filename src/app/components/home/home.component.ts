import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class="pricipal-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center">Angular Exercises</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="text-center">Here you will find a list of exercises to practice Angular</p>
        </div>
      </div>
    </div>
  </div>
    
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
