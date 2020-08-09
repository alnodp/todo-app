import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeaderModel} from '../../models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerData: HeaderModel;
  @Output() goBackEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.goBackEvent.emit(true);
  }

}
