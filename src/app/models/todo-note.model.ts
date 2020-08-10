import {TodoStatusEnum} from '../enums/todo-status.enum';
import {ToolBoxOptionModel} from './tool-box-option.model';

export interface TodoNoteModel {
  id?: string;
  title: string;
  note: string;
  status: TodoStatusEnum;
  creationDate: number;
  editionDate?: number;
  authorName: string;
  authorEmail: string;
  authorAvatarPath?: string;
  toolBoxOptions?: ToolBoxOptionModel[];
}
