import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllAnnounces } from 'src/app/store/selector/announce.selector';

@Component({
  selector: 'app-single-announce',
  templateUrl: './single-announce.component.html',
  styleUrls: ['./single-announce.component.css'],
})
export class SingleAnnounceComponent implements OnInit {
  currentIndex = 0;

  data$: Observable<any>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.data$ = this.store.select(getAllAnnounces);
    this.data$.subscribe(console.log);
  }

  previousImg() {
    this.currentIndex--;
  }
  nextImg() {
    this.currentIndex++;
  }
}
