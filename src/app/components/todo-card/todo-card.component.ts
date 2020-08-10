import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoNoteModel} from '../../models/todo-note.model';
import {TodoStatusEnum} from '../../enums/todo-status.enum';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() cardData: TodoNoteModel;
  @Output() toolBoxOption = new EventEmitter();
  TODO_STATUS = TodoStatusEnum;

  constructor() { }

  ngOnInit(): void {
  }

  toolBoxOptionSelected(option) {
    this.toolBoxOption.emit(option);
  }

}
