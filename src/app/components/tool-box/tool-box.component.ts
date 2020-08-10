import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToolBoxOptionModel} from '../../models/tool-box-option.model';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss']
})
export class ToolBoxComponent implements OnInit {
  @Input() toolBoxOptionList: ToolBoxOptionModel[];
  @Output() optionSelected = new EventEmitter();
  showToolBox = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: ToolBoxOptionModel) {
    if (option.isActive) {
      this.optionSelected.emit(option);
    }
  }

}
