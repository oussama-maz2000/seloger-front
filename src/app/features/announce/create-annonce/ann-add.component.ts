import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Property } from 'src/app/core/model/property.interface';
import { AnnonceService } from 'src/app/core/services/annonce.service';
import { willaya } from 'src/app/core/shared/willaya';
import { validateNumber } from 'src/app/core/validation/ValidationFn';

@Component({
  selector: 'app-ann-add',
  templateUrl: './ann-add.component.html',
  styleUrls: ['./ann-add.component.css'],
})
export class AnnAddComponent implements OnInit {
  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['clean'],
      ],
    },
  };

  willays: { id: string; name: string }[];

  fromRequired: FormGroup;

  fromOptional: FormGroup;
  files: File[] = [];
  imgs: string[] = [];
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

  constructor(private _annService: AnnonceService, private http: HttpClient) {
    this.willays = willaya;
  }

  ngOnInit(): void {
    this.fromRequired = new FormGroup({
      propType: new FormControl('', [Validators.required]),
      anncType: new FormControl('', [Validators.required]),
      willaya: new FormControl('', [Validators.required]),
      adrs: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      etage: new FormControl('', [Validators.required, validateNumber()]),
      facade: new FormControl('', [Validators.required, validateNumber()]),
      price: new FormControl('', [Validators.required, validateNumber()]),
      surface: new FormControl('', [Validators.required, validateNumber()]),
      juridicType: new FormControl('', [Validators.required]),
    });

    this.fromOptional = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(),
      serviceAccessibility: new FormArray([]),
      cuisin: new FormControl(''),
      hygiene: new FormArray([]),
      pieces: new FormArray([]),
      lime: new FormControl(''),
      availability: new FormControl(''),
      airCondition: new FormControl(),
      publicService: new FormArray([]),
    });
  }

  logData() {
    const property: Property = {
      propType: this.fromRequired.get('propType').value,
      ancType: this.fromRequired.get('anncType').value,
      address: this.fromRequired.get('adrs').value,
      willaya: this.fromRequired.get('willaya').value.name,
      surface: +this.fromRequired.get('surface').value,
      price: +this.fromRequired.get('price').value,
      etage: +this.fromRequired.get('etage').value,
      facade: +this.fromRequired.get('facade').value,
      title: this.fromOptional.get('title').value || null,
      description: this.fromOptional.get('description').value || null,
      serviceAccessibility: this.fromOptional.get('serviceAccessibility')
        .value || [null],
      cuisin: this.fromOptional.get('cuisin').value || null,
      hygiene: this.fromOptional.get('hygiene').value || [null],
      pieces: this.fromOptional.get('pieces').value || [null],
      lime: this.fromOptional.get('lime').value || null,
      airConditioning: this.fromOptional.get('airCondition').value || false,
      publicService: this.fromOptional.get('publicService').value || [null],
      availability: this.fromOptional.get('availability').value || null,
    };

    if (this.fromRequired.valid == true && this.files.length > 1) {
      alert('your property has sent ');
    }
    console.log(this.fromRequired.valid);

    /* const headers = new HttpHeaders();
    headers.append('Content-Type': 'application/json'); */

    /*   const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); */
    /*  this.http
      .post('/api/announce/post/annonce', [property], {
        headers: headers,
        responseType: 'text',
      })
      .subscribe(console.log); */
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const checkArray: FormArray = this.fromOptional.get(
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
