import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Code } from '../../models/code';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() codes!: Code[] | null;
  @Output() readonly refresh = new EventEmitter<void>();

  displayedColumns: string[] = ['code', 'from', 'to', 'airline', 'time', 'flightCount'];

  constructor() { }

  doRefresh(): void {
    this.refresh.next();
  }

}
