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

  requiredInfo_Form: FormGroup;
  optionalInfo_Form: FormGroup;
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
    this.requiredInfo_Form = new FormGroup({
      propType: new FormControl('', [Validators.required]), // Removed the array around Validators.required
      anncType: new FormControl('', [Validators.required]), // Removed the array around Validators.required
      willaya: new FormControl('', [Validators.required]), // Removed the array around Validators.required
      adrs: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]), // Removed the array around Validators.required and Validators.minLength(10)
      etage: new FormControl('', [Validators.required, validateNumber()]), // Removed the array around Validators.required
      facade: new FormControl('', [Validators.required, validateNumber()]), // Removed the array around Validators.required
      price: new FormControl('', [Validators.required, validateNumber()]), // Removed the array around Validators.required
      surface: new FormControl('', [Validators.required, validateNumber()]), // Removed the array around Validators.required
      juridicType: new FormControl('', [Validators.required]), // Removed the array around Validators.required
    });

    this.optionalInfo_Form = new FormGroup({
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
    const form = new FormData();

    /*  const property: Property = {
      propType: this.requiredInfo_Form.get('propType').value,
      ancType: this.requiredInfo_Form.get('anncType').value,
      address: this.requiredInfo_Form.get('adrs').value,
      willaya: this.requiredInfo_Form.get('willaya').value.name,
      surface: +this.requiredInfo_Form.get('surface').value,
      price: +this.requiredInfo_Form.get('price').value,
      etage: +this.requiredInfo_Form.get('etage').value,
      facade: +this.requiredInfo_Form.get('facade').value,
      title: this.optionalIngo_Form.get('title').value || null,
      description: this.optionalIngo_Form.get('description').value || null,
      serviceAccessibility: this.optionalIngo_Form.get('serviceAccessibility')
        .value || [null],
      cuisin: this.optionalIngo_Form.get('cuisin').value || null,
      hygiene: this.optionalIngo_Form.get('hygiene').value || [null],
      pieces: this.optionalIngo_Form.get('pieces').value || [null],
      lime: this.optionalIngo_Form.get('lime').value || null,
      airConditioning:
        this.optionalIngo_Form.get('airCondition').value || false,
      publicService: this.optionalIngo_Form.get('publicService').value || [
        null,
      ],
      availability: this.optionalIngo_Form.get('availability').value || null,
    }; */

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
    console.log(this.optionalInfo_Form.get('description').value);
    console.log(this.optionalInfo_Form.get('serviceAccessibility').value);
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const checkArray: FormArray = this.optionalInfo_Form.get(
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
