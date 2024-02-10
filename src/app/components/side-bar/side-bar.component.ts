import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex1">Exercise 1</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex2">Exercise 2</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex3">Exercise 3</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex4">Exercise 4</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex5">Exercise 5</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex6">Exercise 6</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex7">Exercise 7</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex8">Exercise 8</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex9">Exercise 9</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/ex10">Exercise 10</a>
                </div>
            </div>
  `,
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
