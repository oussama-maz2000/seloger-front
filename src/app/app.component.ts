import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  getAlert,
  getLoading,
  getType,
} from './store/selector/shared.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'seLoger';
  showLoading: Observable<boolean>;
  showAlert: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    /* this.showAlert = this.store.select(getAlert); */
  }
}
