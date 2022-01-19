import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loadCodes } from '../../state/codes.actions';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {
  isLoading$ = this.store.select((state: AppState) => state.codes.loading);
  codes$ = this.store.select((state: AppState) => state.codes.codes);
  showError$ = this.store.select((state: AppState) => state.codes.showCodeLoadError);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadCodes();
  }

  loadCodes(): void {
    this.store.dispatch(loadCodes());
  }
}
