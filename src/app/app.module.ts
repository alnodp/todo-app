import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { ToolBoxComponent } from './components/tool-box/tool-box.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoUserComponent } from './pages/todo-user/todo-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoCardComponent,
    ToolBoxComponent,
    TodoAddComponent,
    TodoUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
