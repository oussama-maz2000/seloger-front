import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  besoinType = ['House', 'appartement', 'Terrain', 'Local commercial'];

  selectedBesoin = [];
  filterForm: FormGroup;
  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.willays = willaya;
    this.filterForm = this.formBuilder.group({
      type: ['louer'],
      willaya: ['Batna'],
      budget: [2000],
      besoin: [['House', 'appartement']],
    });
  }

  ngOnInit(): void {
    this.store.select(getAnnounces).subscribe(console.log);
  }

  onSubmit() {
    console.log(this.filterForm.value);
  }
}
