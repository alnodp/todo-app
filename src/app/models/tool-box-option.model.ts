import {ToolBoxTypesEnum} from '../enums/tool-box-types.enum';
import {ToolBoxOptionsEnum} from '../enums/tool-box-options.enum';

export interface ToolBoxOptionModel {
  id: ToolBoxOptionsEnum;
  iconName: string;
  optionName: string;
  isActive: boolean;
  type: ToolBoxTypesEnum;
}
