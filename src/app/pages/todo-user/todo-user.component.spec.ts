import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUserComponent } from './todo-user.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TodoUserComponent', () => {
  let component: TodoUserComponent;
  let fixture: ComponentFixture<TodoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUserComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'list', component: TodoListComponent },
        ]),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
