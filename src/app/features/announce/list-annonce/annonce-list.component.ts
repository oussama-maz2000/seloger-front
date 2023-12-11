import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, elementAt, filter, map, mergeMap, of } from 'rxjs';
import { willaya } from 'src/app/core/shared/data';
import { getAllAnnounces } from 'src/app/store/selector/announce.selector';
import { Announce, Property } from 'src/app/core/model/announce.interface';
@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css'],
})
export class AnnonceListComponent implements OnInit {
  willaya: string[];

  data$: Observable<Property[]>;
  selectedBesoin = [];
  filterForm: FormGroup;
  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.willaya = willaya;
    this.filterForm = this.formBuilder.group({
      property: [],
      besoin: [],
      price: [],
      willaya: [],
    });
  }

  ngOnInit(): void {
    this.data$ = this.store.select(getAllAnnounces);
  }

  setBesoin(value: string): void {
    this.filterForm.get('besoin').setValue(value);

    if (this.filterForm.get('besoin').value == '*') {
      this.data$ = this.store.select(getAllAnnounces);
    } else {
      this.data$ = this.data$.pipe(
        map((elements: Property[]) =>
          elements.filter(
            (element: Property) =>
              element.annType ===
              this.filterForm.get('besoin').value.toUpperCase()
          )
        )
      );
    }
  }

  setProperty(value: string): void {
    this.filterForm.get('property').setValue(value);
    if (this.filterForm.get('property').value == '*') {
      this.data$ = this.store.select(getAllAnnounces);
    } else {
      this.data$ = this.data$.pipe(
        map((elements: Property[]) =>
          elements.filter(
            (element: Property) =>
              element.prpType ===
              this.filterForm.get('property').value.toUpperCase()
          )
        )
      );
    }
  }

  setWillaya(value: string): void {
    this.filterForm.get('willaya').setValue(value);
    if (this.filterForm.get('willaya').value == 'All') {
      this.data$ = this.store.select(getAllAnnounces);
    } else {
      this.data$ = this.data$.pipe(
        map((elements: Property[]) =>
          elements.filter(
            (element: Property) =>
              element.willaya == this.filterForm.get('willaya').value
          )
        )
      );
    }
  }

  setPrix(): void {
    if (this.filterForm.get('price').value == null) {
      this.data$ = this.store.select(getAllAnnounces);
    } else {
      this.data$ = this.data$.pipe(
        map((elements: Property[]) =>
          elements.filter(
            (element: Property) =>
              element.price <= this.filterForm.get('price').value
          )
        )
      );
    }
  }
  onSubmit() {
    console.log(this.filterForm.value);
  }
}
