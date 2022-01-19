import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      overview works!
    </p>
  `,
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
