import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  template: `

 <nav class="navbar navbar-expand-lg bg-dark p-3  ">
  <img id="emi-photo" alt="photo" src="https://github.com/emi-ms.png" />
  <a class="navbar-brand text-white" routerLink="/">Angular Exercises</a>
</nav> 

  `,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
