import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoCardComponent} from './todo-card.component';
import {TodoNoteModel} from '../../models/todo-note.model';
import {TodoStatusEnum} from '../../enums/todo-status.enum';
import {CrudService} from '../../services/crud/crud.service';

const todoNoteMock: TodoNoteModel = {
  title: 'Nueva Nota',
  note: 'Esta es una nueva nota',
  status: TodoStatusEnum.ACTIVE,
  creationDate: new Date().getTime(),
  toolBoxOptions: [],
  authorName: 'Andres L.',
  authorEmail: 'email.email.com',
  authorAvatarPath: ''
};

describe('TodoCardComponent', () => {
  let component: TodoCardComponent;
  let fixture: ComponentFixture<TodoCardComponent>;
  let crudService: CrudService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    crudService = TestBed.inject(CrudService);
    crudService.todoItem = todoNoteMock;
    fixture = TestBed.createComponent(TodoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
