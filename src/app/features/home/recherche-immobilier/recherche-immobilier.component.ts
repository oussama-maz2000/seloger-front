import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { willaya } from 'src/app/core/shared/data';
import { LoadAnnounceAction } from 'src/app/store/action/announce.action';
import { SpinnerAction } from 'src/app/store/action/shared.action';

@Component({
  selector: 'app-recherche-immobilier',
  templateUrl: './recherche-immobilier.component.html',
  styleUrls: ['./recherche-immobilier.component.css'],
})
export class RechercheImmobilierComponent {
  searchForm: FormGroup;
  willays: string[];
  needs: Array<any> = [
    {
      key: 'appartement',
      value: 'Appartement',
    },
    {
      key: 'maison',
      value: 'Maison',
    },
    {
      key: 'local',
      value: 'Local commercial',
    },
    {
      key: 'terrain',
      value: 'Terrain',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.willays = willaya;
  }
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      type: [],
      willaya: [],
      budget: [],
      besoin: this.formBuilder.array([]),
    });
  }

  elementSelected: string[] = [];
  onCheckSelected(event) {
    if (event.target.checked) {
      this.searchForm.controls['besoin'].value.push(
        event.target.value as string
      );
    } else {
      if (!event.target.checked) {
        let index = this.elementSelected.indexOf(event.target.value as string);
        this.searchForm.controls['besoin'].value.splice(index!, 1);
      }
    }
    //  this.searchForm.controls['besoin'] = this.elementSelected as Object;
  }

  onSearch(): void {}

  showData() {
    console.log(this.searchForm.value);
    //console.log(this.searchForm.value['willaya']['$ngOptionLabel']);
    this.store.dispatch(LoadAnnounceAction());
    this.store.dispatch(SpinnerAction({ status: true }));

    this.router.navigate(['annonce']);
  }
}
