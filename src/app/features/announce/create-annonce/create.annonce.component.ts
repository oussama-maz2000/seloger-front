import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnonceService } from 'src/app/core/services/annonce.service';
import {
  willaya,
  serviceAccessibilityList,
  hygieneList,
  piecesList,
  publicServcieList,
  quillConfig,
} from 'src/app/core/shared/data';
import { validateNumber } from 'src/app/core/validation/ValidationFn';

@Component({
  selector: 'app-ann-add',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css'],
})
export class CreateAnnonceComponent implements OnInit {
  willays: string[];
  serviceAccessibilityList: string[];
  hygieneList: string[];
  piecesList: string[];
  publicServcieList: string[];
  quillConfig: any;
  fromRequired: FormGroup;
  files: File[] = [];

  constructor(private http: HttpClient) {
    this.willays = willaya;
    this.serviceAccessibilityList = serviceAccessibilityList;
    this.hygieneList = hygieneList;
    this.piecesList = piecesList;
    this.publicServcieList = publicServcieList;
    this.quillConfig = quillConfig;
  }

  ngOnInit(): void {
    this.fromRequired = new FormGroup({
      propType: new FormControl('', [Validators.required]),
      anncType: new FormControl('', [Validators.required]),
      willaya: new FormControl('', [Validators.required]),
      address: new FormControl('', [
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
      images: new FormArray([], Validators.required),
    });
  }

  sendData() {
    const form: FormData = new FormData();
    form.append('propType', this.fromRequired.get('propType').value);
    form.append('anncType', this.fromRequired.get('anncType').value);
    form.append('willaya', this.fromRequired.get('willaya').value);
    form.append('address', this.fromRequired.get('address').value);
    form.append('etage', this.fromRequired.get('etage').value);
    form.append('surface', this.fromRequired.get('surface').value);
    form.append('facade', this.fromRequired.get('facade').value);
    form.append('price', this.fromRequired.get('price').value);
    form.append('juridicType', this.fromRequired.get('juridicType').value);
    form.append('title', this.fromRequired.get('title').value);
    form.append('description', this.fromRequired.get('description').value);
    form.append(
      'serviceAccessibility',
      this.fromRequired.get('serviceAccessibility').value
    );
    form.append('cuisin', this.fromRequired.get('cuisin').value);
    form.append('hygiene', this.fromRequired.get('hygiene').value);
    form.append('pieces', this.fromRequired.get('pieces').value);
    form.append('availability', this.fromRequired.get('availability').value);
    form.append('airCondition', this.fromRequired.get('airCondition').value);
    form.append('publicService', this.fromRequired.get('publicService').value);
    for (const file of this.files) {
      form.append('images', file);
    }

    if (this.fromRequired.valid) {
      const headers = new HttpHeaders({
        //     Accept: '*/*',
      });
      /*  this.http
         .post('/api/announce/post/annonce', form, {
           headers: headers,
           responseType: 'text',
         })
         .subscribe(console.log);
     } */
    }
    console.log(this.fromRequired.value);
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const checkArray: FormArray = this.fromRequired.get(
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
