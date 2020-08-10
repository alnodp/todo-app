import {Component, OnInit} from '@angular/core';
import {HeaderModel} from '../../models/header.model';
import {UtilsService} from '../../services/utils/utils.service';
import {Router} from '@angular/router';
import {CrudService} from '../../services/crud/crud.service';
import {TodoNoteModel} from '../../models/todo-note.model';
import {environment} from '../../../environments/environment';
import {UserService} from '../../services/user/user.service';
import {ToolBoxService} from '../../services/tool-box/tool-box.service';
import {ToolBoxTypesEnum} from '../../enums/tool-box-types.enum';
import {TodoStatusEnum} from '../../enums/todo-status.enum';
import {ToolBoxOptionsEnum} from '../../enums/tool-box-options.enum';
import {ToolBoxOptionModel} from '../../models/tool-box-option.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  headerData: HeaderModel;
  todoList: TodoNoteModel[] = [];
  toolBoxOptionList: ToolBoxOptionModel[] = [];

  constructor(private utilsService: UtilsService,
              private router: Router,
              private crudService: CrudService,
              private userService: UserService,
              private toolBoxService: ToolBoxService) {
    this.initializeHeader();
    this.getToolBoxOptions();
  }

  ngOnInit() {
    this.getToDoList();
  }

  addNote() {
    this.router.navigate(['add']);
  }

  toolBoxOptionSelected(option: ToolBoxOptionModel, card: TodoNoteModel) {
    switch (option.id) {
        case ToolBoxOptionsEnum.TODO_DETAILS:
          this.crudService.todoItem = card;
          this.router.navigate(['add']);
          break;
        case ToolBoxOptionsEnum.TODO_DELETE:
          this.crudService.deleteNote(card.id);
          break;
      }
  }

  private getToDoList() {
    this.crudService.getNoteList().subscribe( data => {
      this.todoList = data.map(e => {
        const dataId =  e.payload.doc.id;
        const dataDoc = e.payload.doc.data() as {};
        const todoItem = {
          id: e.payload.doc.id,
          ...dataDoc,
        } as TodoNoteModel;
        const toolBoxOptionList = JSON.parse(JSON.stringify(this.toolBoxOptionList));
        todoItem.toolBoxOptions = toolBoxOptionList.map(option => {
          if (option.id === ToolBoxOptionsEnum.TODO_DELETE && todoItem.status === TodoStatusEnum.FINISHED) {
            option.isActive = true;
          }
          return option;
        });
        return todoItem;
      });
    });
  }

  private initializeHeader() {
    const currentDate = this.utilsService.getHeaderFormatDate();
    const emailUser = this.userService.userEmail;
    const avatarUrl = `${environment.urlAvatar}/48/${emailUser}`;
    this.headerData = new HeaderModel('To do list', currentDate, false, avatarUrl);
  }

  private getToolBoxOptions() {
    this.toolBoxService.getToolBoxOptions(ToolBoxTypesEnum.TODO_CARD).subscribe(options => {
      this.toolBoxOptionList = options;
    });
  }

}
