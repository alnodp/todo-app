import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../../services/utils/utils.service';
import {Router} from '@angular/router';
import {HeaderModel} from '../../models/header.model';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  headerData: HeaderModel;
  todoAddForm: FormGroup;

  constructor(private utilsService: UtilsService,
              private router: Router,
              private location: Location,
              private fb: FormBuilder) {
    this.initializeHeader();
    this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('todoAddForm onSubmit', this.todoAddForm.value, 'isValid', this.todoAddForm.valid);
    if (this.todoAddForm.invalid) {
      return;
    }
  }

  goBack() {
    this.location.back();
  }

  private initForm() {
    this.todoAddForm = this.fb.group({
      title: [{ value: '', disabled: false }, [Validators.required]],
      note: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  private initializeHeader() {
    const currentDate = this.utilsService.getHeaderFormatDate();
    const avatarUrl = 'https://api.adorable.io/avatars/48/amlopezr90@gmail.com';
    this.headerData = new HeaderModel('To do list', currentDate, true, avatarUrl);
  }

}
