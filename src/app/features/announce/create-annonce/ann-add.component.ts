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
import { log } from 'winston';

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

  willays: string[];

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
      title: new FormControl(),
      description: new FormControl(),
      serviceAccessibility: new FormArray([]),
      cuisin: new FormControl(),
      hygiene: new FormArray([]),
      pieces: new FormArray([]),
      lime: new FormControl(),
      availability: new FormControl(),
      airCondition: new FormControl(),
      publicService: new FormArray([]),
      images: new FormArray([]),
    });

    this.fromOptional = new FormGroup({});
  }

  logData() {
    const formData = new FormData();

    // Append files to formData
    for (const file of this.files) {
      formData.append('file', file, file.name);
    }

    // Append form data to the same formData
    formData.append('requiredInfo', JSON.stringify(this.fromRequired.value));

    if (this.fromRequired.valid && this.files.length > 1) {
      const headers = new HttpHeaders();
      headers.append('Accept', '*/*');
      headers.append('Content-Type', 'multipart/form-data');

      /*  this.http
        .post('/api/announce/post/annonce', formData, {
          headers: headers,
          responseType: 'text',
        })
        .subscribe(console.log); */
      console.log(this.fromRequired.value);
    }
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
    /* if (event.addedFiles[0].size < 2222222222) {
      this.files.push(...event.addedFiles);
    } */
    const imageArray = this.fromRequired.get('images') as FormArray;
    this.files.push(...event.addedFiles);
    for (const file of this.files) {
      imageArray.push(new FormControl(file));
    }
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
