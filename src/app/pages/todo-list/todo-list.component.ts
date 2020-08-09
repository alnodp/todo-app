import { Component, OnInit } from '@angular/core';
import {HeaderModel} from '../../models/header.model';
import {UtilsService} from '../../services/utils/utils.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  headerData: HeaderModel;

  constructor(private utilsService: UtilsService, private router: Router) {
    this.initializeHeader();
  }

  ngOnInit() {}

  addNote() {
    this.router.navigate(['add']);
  }

  private initializeHeader() {
    const currentDate = this.utilsService.getHeaderFormatDate();
    const avatarUrl = 'https://api.adorable.io/avatars/48/amlopezr90@gmail.com';
    this.headerData = new HeaderModel('To do list', currentDate, false, avatarUrl);
  }

}
