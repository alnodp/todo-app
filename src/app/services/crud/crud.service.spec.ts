import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {UserService} from '../user/user.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {TodoNoteModel} from '../../models/todo-note.model';
import {TodoStatusEnum} from '../../enums/todo-status.enum';
import {BehaviorSubject} from 'rxjs';

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

describe('CrudService', () => {
  let service: CrudService;
  let userService: UserService;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (d: any) => new Promise((resolve, reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
      ],
      providers: [{provide: AngularFirestore, useValue: FirestoreStub}]
    });
    userService = TestBed.inject(UserService);
    userService.userEmail = 'Andres L.';
    userService.userName = 'email@email.com';
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
