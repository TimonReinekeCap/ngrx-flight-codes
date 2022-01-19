import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @Output() readonly retryLoad = new EventEmitter<void>();

  doRetry(): void {
    this.retryLoad.emit();
  }

}
