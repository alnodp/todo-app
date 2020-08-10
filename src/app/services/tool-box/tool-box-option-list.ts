import {ToolBoxOptionModel} from '../../models/tool-box-option.model';
import {ToolBoxTypesEnum} from '../../enums/tool-box-types.enum';
import {ToolBoxOptionsEnum} from '../../enums/tool-box-options.enum';

export const toolBoxOptionList: ToolBoxOptionModel[] = [
  {
    id: ToolBoxOptionsEnum.TODO_DETAILS,
    iconName: 'fas fa-eye',
    optionName: 'Ver tarea',
    isActive: true,
    type: ToolBoxTypesEnum.TODO_CARD
  },
  {
    id: ToolBoxOptionsEnum.TODO_DELETE,
    iconName: 'fas fa-trash',
    optionName: 'Borrar',
    isActive: false,
    type: ToolBoxTypesEnum.TODO_CARD
  }
];
