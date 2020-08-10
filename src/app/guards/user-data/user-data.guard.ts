import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }
  canActivate() {
    if (!this.userService.userName || !this.userService.userEmail) {
      this.router.navigate(['user']);
      return false;
    }
    return true;
  }

}
