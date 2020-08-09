import {Component, Input, OnInit} from '@angular/core';
import {HeaderModel} from '../../models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerData: HeaderModel;

  constructor() { }

  ngOnInit(): void {
  }

}
