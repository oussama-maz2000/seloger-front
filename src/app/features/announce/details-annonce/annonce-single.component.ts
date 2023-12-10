import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { State } from 'src/app/store';
import { getPropertyById } from 'src/app/store/selector/properties.selector';

@Component({
  selector: 'app-annonce-single',
  templateUrl: './annonce-single.component.html',
  styleUrls: ['./annonce-single.component.css'],
})
export class AnnonceSingleComponent implements OnInit {
  id: number;
  property$: Observable<any>;
  constructor(private route: ActivatedRoute, private store: Store<State>) {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      console.log(this.id);
    });
  }
  /* readonly title = this._anncService.title(); */

  ngOnInit(): void {
    this.property$ = this.store.select(getPropertyById(this.id));
    this.property$.subscribe((data) => {
      console.log(data);
    });
  }
}
