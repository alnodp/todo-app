import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './pages/todo-list/todo-list.component';
import {TodoAddComponent} from './pages/todo-add/todo-add.component';
import {TodoUserComponent} from './pages/todo-user/todo-user.component';
import {UserDataGuard} from './guards/user-data/user-data.guard';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent,
    canActivate: [UserDataGuard]
  },
  {
    path: 'add',
    component: TodoAddComponent,
    canActivate: [UserDataGuard]
  },
  {
    path: 'user',
    component: TodoUserComponent
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
