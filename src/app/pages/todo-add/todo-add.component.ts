import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../services/utils/utils.service';
import {Router} from '@angular/router';
import {HeaderModel} from '../../models/header.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoNoteModel} from '../../models/todo-note.model';
import {TodoStatusEnum} from '../../enums/todo-status.enum';
import {CrudService} from '../../services/crud/crud.service';
import {environment} from '../../../environments/environment';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  headerData: HeaderModel;
  todoAddForm: FormGroup;
  isEditMode = false;
  TODO_STATUS = TodoStatusEnum;

  constructor(private utilsService: UtilsService,
              private router: Router,
              private fb: FormBuilder,
              private crudService: CrudService,
              private userService: UserService) {
    this.initializeHeader();
    this.initForm();
  }

  ngOnInit(): void {
    const todoItem = this.crudService.todoItem;
    if (todoItem) {
      this.isEditMode = true;
      this.todoAddForm.controls.title.setValue(todoItem.title);
      this.todoAddForm.controls.note.setValue(todoItem.note);
      this.todoAddForm.controls.status.setValue(todoItem.status === TodoStatusEnum.FINISHED);
    }
  }

  onSubmit() {
    if (this.todoAddForm.invalid) {
      return;
    }
    const todoData = this.buildAddNoteRequest();

    if (this.isEditMode) {
      this.crudService.updateNote(todoData).then( response => {
        this.resetForm();
        this.router.navigate(['list']);
      }). catch( err => console.log('[ERROR] updateNote', err));
    } else {
      this.crudService.addNote(todoData).then( response => {
        this.resetForm();
        this.router.navigate(['list']);
      }). catch( err => console.log('[ERROR] addNote', err));
    }
  }

  goBack() {
    this.router.navigate(['list']);
  }

  private initForm() {
    this.todoAddForm = this.fb.group({
      title: [{ value: '', disabled: false }, [Validators.required]],
      note: [{ value: '', disabled: false }, [Validators.required]],
      status: [{ value: false, disabled: false }, []],
    });
  }

  private initializeHeader() {
    const currentDate = this.utilsService.getHeaderFormatDate();
    const avatarUrl = `${environment.urlAvatar}/48/${this.userService.userEmail}`;
    this.headerData = new HeaderModel('To do list', currentDate, true, avatarUrl);
  }

  private resetForm() {
    this.todoAddForm.reset();
    this.crudService.todoItem = null;
  }

  private buildAddNoteRequest() {
    const todoNote = {
      title: this.todoAddForm.controls.title.value,
      note: this.todoAddForm.controls.note.value,
    } as TodoNoteModel;
    if (this.isEditMode) {
      todoNote.id = this.crudService.todoItem.id;
      todoNote.editionDate = new Date().getTime();
      todoNote.status = this.todoAddForm.controls.status.value ? TodoStatusEnum.FINISHED : TodoStatusEnum.ACTIVE;
    } else {
      todoNote.authorName = this.userService.userName;
      todoNote.authorEmail = this.userService.userEmail;
      todoNote.creationDate =  new Date().getTime();
      todoNote.status = TodoStatusEnum.ACTIVE;
      todoNote.authorAvatarPath = `${environment.urlAvatar}/24/${this.userService.userEmail}`;
    }
    return todoNote;
  }

}
