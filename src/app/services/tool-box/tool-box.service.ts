import { Injectable } from '@angular/core';
import {toolBoxOptionList} from './tool-box-option-list';
import {of} from 'rxjs';
import {ToolBoxTypesEnum} from '../../enums/tool-box-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ToolBoxService {

  constructor() { }

  getToolBoxOptions(type: ToolBoxTypesEnum.TODO_CARD) {
    return of(toolBoxOptionList.filter(option => option.type === type));
  }
}
