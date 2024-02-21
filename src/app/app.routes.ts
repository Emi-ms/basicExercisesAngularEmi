import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ex01Component } from './components/ex01/ex01.component';
import { Ex02Component } from './components/ex02/ex02.component';
import { Ex03Component } from './components/ex03/ex03.component';
import { Ex04Component } from './components/ex04/ex04.component';
import { Ex05Component } from './components/ex05/ex05.component';
import { Ex06Component } from './components/ex06/ex06.component';
import { Ex07Component } from './components/ex07/ex07.component';
import { Ex08Component } from './components/ex08/ex08.component';
import { Ex09Component } from './components/ex09/ex09.component';
import { Ex10Component } from './components/ex10/ex10.component';
import { ExamComponent } from './components/exam/exam.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'ex1', component: Ex01Component, title: 'Exercise 1' },
    { path: 'ex2', component: Ex02Component, title: 'Exercise 2' },
    { path: 'ex3', component: Ex03Component, title: 'Exercise 3' },
    { path: 'ex4', component: Ex04Component, title: 'Exercise 4' },
    { path: 'ex5', component: Ex05Component, title: 'Exercise 5' },
    { path: 'ex6', component: Ex06Component, title: 'Exercise 6' },
    { path: 'ex7', component: Ex07Component, title: 'Exercise 7' },
    { path: 'ex8', component: Ex08Component, title: 'Exercise 8' },
    { path: 'ex9', component: Ex09Component, title: 'Exercise 9' },
    { path: 'ex10', component: Ex10Component, title: 'Exercise 10' },
    { path: 'exam', component: ExamComponent, title: 'Exam'}

];
