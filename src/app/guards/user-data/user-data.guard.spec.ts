import { TestBed } from '@angular/core/testing';

import { UserDataGuard } from './user-data.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {TodoUserComponent} from '../../pages/todo-user/todo-user.component';

describe('UserDataGuard', () => {
  let guard: UserDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'user', component: TodoUserComponent },
        ])
      ]
    });
    guard = TestBed.inject(UserDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
