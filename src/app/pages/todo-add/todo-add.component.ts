import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../../services/utils/utils.service';
import {Router} from '@angular/router';
import {HeaderModel} from '../../models/header.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  headerData: HeaderModel;

  constructor(private utilsService: UtilsService, private router: Router) {
    this.initializeHeader();
  }

  ngOnInit(): void {
  }

  private initializeHeader() {
    const currentDate = this.utilsService.getHeaderFormatDate();
    const avatarUrl = 'https://api.adorable.io/avatars/48/amlopezr90@gmail.com';
    this.headerData = new HeaderModel('To do list', currentDate, avatarUrl);
  }

}
