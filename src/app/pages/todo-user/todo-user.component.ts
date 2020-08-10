import { Component, OnInit } from '@angular/core';
import {HeaderModel} from '../../models/header.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilsService} from '../../services/utils/utils.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-todo-user',
  templateUrl: './todo-user.component.html',
  styleUrls: ['./todo-user.component.scss']
})
export class TodoUserComponent implements OnInit {
  headerData: HeaderModel;
  todoUserForm: FormGroup;

  constructor(private utilsService: UtilsService,
              private router: Router,
              private fb: FormBuilder,
              private userService: UserService) {
    this.initializeHeader();
    this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.todoUserForm.invalid) {
      return;
    }
    this.userService.userName = this.todoUserForm.controls.userName.value;
    this.userService.userEmail = this.todoUserForm.controls.userEmail.value;
    this.router.navigate(['list']);
  }

  private initForm() {
    this.todoUserForm = this.fb.group({
      userName: [{ value: '', disabled: false }, [Validators.required]],
      userEmail: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  private initializeHeader() {
    const currentDate = this.utilsService.getHeaderFormatDate();
    this.headerData = new HeaderModel('To do list', currentDate, false, null);
  }

}
