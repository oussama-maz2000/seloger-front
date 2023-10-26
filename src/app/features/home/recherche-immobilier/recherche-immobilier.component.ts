import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { willaya } from 'src/app/core/shared/willaya';

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

  constructor(private formBuilder: FormBuilder) {
    this.willays = willaya;
    this.searchForm = this.formBuilder.group({
      type: ['L', ''],
      willaya: [],
      budget: [''],
      besoin: formBuilder.array([]),
    });
  }
  ngOnInit(): void {}

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
  }
}
