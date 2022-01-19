import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Code } from '../../models/code';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() codes!: Code[];
  @Output() readonly addCode = new EventEmitter<void>();

  displayedColumns: string[] = ['code', 'from', 'to', 'airline', 'time', 'flightCount'];

  constructor() { }

  ngOnInit(): void {
  }

}
