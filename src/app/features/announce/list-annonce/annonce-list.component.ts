import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { willaya } from 'src/app/core/shared/data';
import { getAnnounces } from 'src/app/store/selector/announce.selector';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css'],
})
export class AnnonceListComponent implements OnInit {
  willays: string[];

  constructor(private store: Store) {
    this.willays = willaya;
  }

  ngOnInit(): void {
    this.store.select(getAnnounces).subscribe(console.log);
  }
}
