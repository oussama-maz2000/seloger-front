import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { willaya } from 'src/app/core/shared/data';
import { getAllAnnounces } from 'src/app/store/selector/announce.selector';
import { log } from 'winston';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css'],
})
export class AnnonceListComponent implements OnInit {
  willaya: string[];

  data$: Observable<any[]>;
  selectedBesoin = [];
  filterForm: FormGroup;
  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.willaya = willaya;
    this.filterForm = this.formBuilder.group({
      property: [''],
      besoin: [''],
      prix: [],
      willaya: [],
    });
  }

  ngOnInit(): void {
    this.data$ = this.store.select(getAllAnnounces);
  }

  setBesoin(value: string): void {
    this.filterForm.get('besoin').setValue(value);
  }

  setProperty(value: string): void {
    this.filterForm.get('property').setValue(value);
  }

  setWillaya(value: string): void {
    this.filterForm.get('willaya').setValue(value);
  }
  onSubmit() {
    console.log(this.filterForm.value);
  }
}
