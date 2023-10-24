import { HttpClient } from '@angular/common/http';
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AnnonceService } from 'src/app/core/services/annonce.service';
import { willaya } from 'src/app/core/shared/willaya';

@Component({
  selector: 'app-ann-add',
  templateUrl: './ann-add.component.html',
  styleUrls: ['./ann-add.component.css'],
})
export class AnnAddComponent implements OnInit {
  willays: { id: string; name: string }[];

  requiredInfo_Form: FormGroup;
  optionalIngo_Form: FormGroup;
  serviceAccessibilityList = [
    'ELEVATOR',
    'INTERCOM',
    'CHIP PORT',
    'GUARDIAN',
    'PARKING',
    'COLLECTION PARABLES',
    'INTERNET',
  ];

  hygieneList = [
    'WATER_ANK',
    'WATER PUMP',
    'BATHROOM',
    'SEPARATE TOILET',
    'NO SEPARATE TOILET',
  ];

  piecesList = ['SALON', 'TERRACE', 'BALCONY', 'CLOSETS', 'GARDEN'];

  publicServcieList = [
    'PRIMARY SCHOOL',
    'SECONDARY SCHOOL',
    'HIGH SCHOOL',
    'BALCONY',
    'BANK',
    'PUBLIC GARDEN',
    'COURT',
    'TOWN HALL',
  ];

  constructor(private _annService: AnnonceService) {
    this.willays = willaya;
  }

  ngOnInit(): void {
    this.optionalIngo_Form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      serviceAccessibility: new FormArray([]),
      cuisin: new FormControl('SEPERATE'),
      hygiene: new FormArray([]),
      pieces: new FormArray([]),
      lime: new FormControl('CHIMNEY'),
      availability: new FormControl(),
      airCondition: new FormControl('NO', []),
      publicService: new FormArray([]),
    });
  }

  onChangeInput(_event: any) {
    this._annService.title.set('hello');
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const checkArray: FormArray = this.optionalIngo_Form.get(
      formControlName
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  files: File[] = [];
  imgs: string[] = [];
  onSelect(event: any): void {
    /* if (event.addedFiles[0].size < 22222222221000) {
      this.files.push(...event.addedFiles);
    } */
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
