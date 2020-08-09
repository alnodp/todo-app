import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './pages/todo-list/todo-list.component';
import {TodoAddComponent} from './pages/todo-add/todo-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'add',
    component: TodoAddComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
