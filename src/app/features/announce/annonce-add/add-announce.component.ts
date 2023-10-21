import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { willaya } from 'src/app/core/shared/willaya';
import {
  validateServiceAccessebility,
  validateNumber,
} from 'src/app/core/validation/ValidationFn';
import { log } from 'winston';
@Component({
  selector: 'app-announce-form',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.css'],
})
export class AddAnnounce implements OnInit {
  // _______----------------_______
  //  	       Attributes
  // _______----------------_______

  willays: { id: string; name: string }[];
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
  imagesList = [];
  annonceForm: FormGroup;

  // _______----------------_______
  //  	        FUNCTIONS
  // _______----------------_______

  constructor(private http: HttpClient) {
    this.willays = willaya;
  }

  ngOnInit(): void {
    this.annonceForm = new FormGroup({
      propType: new FormControl('HOUSE', [Validators.required]),
      anncType: new FormControl('SALE', [Validators.required]),
      willaya: new FormControl(null, [Validators.required]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      etage: new FormControl(null, [Validators.required, validateNumber()]),
      facede: new FormControl(null, [Validators.required, validateNumber()]),
      price: new FormControl(null, [Validators.required, validateNumber()]),
      surface: new FormControl(null, [Validators.required, validateNumber()]),
      jrdcType: new FormControl('XXX', [Validators.required]),
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

  public get address() {
    return this.annonceForm.get('address');
  }
  public get willaya() {
    return this.annonceForm.get('willaya');
  }

  public get etage() {
    return this.annonceForm.get('etage');
  }
  public get facede() {
    return this.annonceForm.get('facede');
  }
  public get price() {
    return this.annonceForm.get('price');
  }

  public get surface() {
    return this.annonceForm.get('surface');
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const checkArray: FormArray = this.annonceForm.get(
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
  formDataList: FormData[] = [];
  imagesProcess(event: any) {
    this.imagesList.push(event.target.files);

    const formData = new FormData();
    for (let file in this.imagesList) {
      formData.append('file', file);
      this.formDataList.push(formData);
    }

    /*   if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formDataList: FormData[] = [];
      const formData = new FormData();
      formData.append('file', file);
    } */
  }

  submitData(): void {
    if (this.annonceForm.valid) {
      console.log(this.annonceForm.controls);
    } else {
      alert('Invalid annonce try again please ');
    }
  }

  /*   upload(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.http.post('/announce/new/announce', formData, {
        responseType: 'text',
      });
     
      
    }
  } */
  formData = new FormData();
  files: File[] = [];
  onSelect(event: any): void {
    if (event.addedFiles[0].size < 21000) {
      console.log(event.addedFiles[0].size);
      this.files.push(...event.addedFiles);
    }

    for (let file in this.files) {
      this.formData.append('file', file);
    }
    console.log(this.formData);

    //send one image to back-end
    /*  this.formData.append('file', this.files[0]); */
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  sendImgs(): void {
    /*    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data');

    headers = headers.append('boundary', null); */
    const headers = {
      /* 'Content-Type': 'multipart/form-data',
       */
      responseType: 'text',
    };

    this.http
      .post('/api/announce/new/announce', this.formData, {
        headers,
      })
      .subscribe(console.log);
  }
}
