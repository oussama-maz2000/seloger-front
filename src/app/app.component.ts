import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from './core/store/selector/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'seLoger';
  showLoading: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
}
