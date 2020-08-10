import { Injectable } from '@angular/core';

const USER_NAME_KEY = 'todoUserName';
const USER_EMAIL_KEY = 'todoUserEmail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  get userName() {
    return localStorage.getItem(USER_NAME_KEY);
  }

  set userName(name) {
    localStorage.setItem(USER_NAME_KEY, name);
  }

  get userEmail() {
    return localStorage.getItem(USER_EMAIL_KEY);
  }

  set userEmail(email) {
    localStorage.setItem(USER_EMAIL_KEY, email);
  }
}
