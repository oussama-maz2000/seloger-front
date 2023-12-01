import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Property } from 'src/app/core/model/announce.interface';
import {
  willaya,
  serviceAccessibilityList,
  hygieneList,
  piecesList,
  publicServcieList,
  quillConfig,
  avances,
} from 'src/app/core/shared/data';
import {
  validateNumber,
  validatePhoneNumber,
  validatePublicService,
  validateServiceAccessebility,
  validatehygiene,
} from 'src/app/core/validation/ValidationFn';
import { State } from 'src/app/store';
import { CreateAnnonce } from 'src/app/store/action/announce.action';
import { SpinnerAction } from 'src/app/store/action/shared.action';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css'],
})
export class AddAnnonceComponent implements OnInit {
  files: File[] = [];
  serviceAccessibilityList: string[];
  hygieneList: string[];
  piecesList: string[];
  publicServcieList: string[];
  willays: string[];
  avances: string[];
  quillConfig: any;

  proprieteFormControl: FormGroup;
  optionalInformationFormControl: FormGroup;
  uploadFilesFormControl: FormGroup;

  checkProprieteFormValidation: boolean = false;

  showProprieteTab: string = 'tab-pane fade show active';
  showOptionalTab: string = 'tab-pane fade';

  proprieteBtn: string = 'nav-link active';
  optionalBtn: string = 'nav-link ';

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.serviceAccessibilityList = serviceAccessibilityList;
    this.hygieneList = hygieneList;
    this.piecesList = piecesList;
    this.publicServcieList = publicServcieList;
    this.willays = willaya;
    this.quillConfig = quillConfig;
    this.avances = avances;
    this.createProprieteForm();
    this.createOptionalInformationForm();
    this.createUploadsFileForm();
  }

  get images() {
    return this.uploadFilesFormControl.get('images') as FormArray;
  }

  onSelect(event: any): void {
    /* if (event.addedFiles[0].size < 2222222222) {
      this.files.push(...event.addedFiles);
    } */

    for (const file of event.addedFiles) {
      // Check for duplicates before adding to the form array
      const fileExists = this.files.some(
        (existingFile) => existingFile.name === file.name
      );

      if (!fileExists) {
        this.files.push(file);
        this.images.push(new FormControl(file));
      }
    }
  }

  onRemove(event) {
    const indexToRemove = this.files.findIndex(
      (file) => file.name === event.name
    );

    if (indexToRemove !== -1) {
      this.files.splice(indexToRemove, 1);
      this.images.removeAt(indexToRemove);
    }
  }

  preventClose(event: Event): void {
    event.stopPropagation();
  }

  /* handles the jumping between forms  */

  nextToOptional(): void {
    if (this.onSubmitPropriete()) {
      this.showProprieteTab = 'tab-pane fade';
      this.showOptionalTab = 'tab-pane fade active show';
      this.proprieteBtn = 'nav-link ';
      this.optionalBtn = 'nav-link active';
    }
  }

  backToPropriete(): void {
    this.showProprieteTab = 'tab-pane fade active show';
    this.showOptionalTab = 'tab-pane fade ';
    this.proprieteBtn = 'nav-link active';
    this.optionalBtn = 'nav-link ';
  }

  /* submit the forms */

  onSubmitPropriete(): boolean {
    this.checkProprieteFormValidation = true;
    return this.proprieteFormControl.valid;
  }

  onSubmitOptionalInformation(): boolean {
    return this.optionalInformationFormControl.valid;
  }

  /* creation of the form controlers */

  createProprieteForm() {
    this.proprieteFormControl = this.formBuilder.group({
      prpType: [],
      annType: [],
      jrcType: [, [Validators.required]],
      willaya: [, [Validators.required]],
      address: [, [Validators.required]],
      etage: [, [Validators.required, validateNumber()]],
      facade: [, [Validators.required, validateNumber()]],
      price: [, [Validators.required, validateNumber()]],
      surface: [, [Validators.required, validateNumber()]],
      etatType: [, [Validators.required]],
      meublee: [, [Validators.required]],
      negociable: [, [Validators.required]],
    });
  }

  createOptionalInformationForm() {
    this.optionalInformationFormControl = this.formBuilder.group({
      service: this.formBuilder.array([], [validateServiceAccessebility()]),
      hygiene: this.formBuilder.array([], [validatehygiene()]),
      pieces: [''],
      servicePublic: this.formBuilder.array([], [validatePublicService()]),
      climatisation: [],
      chauffage: [],
      city: [],
      avances: [],
      cuisin: [],
      disponible: [],
      description: [],
    });
  }

  createUploadsFileForm() {
    this.uploadFilesFormControl = this.formBuilder.group({
      images: this.formBuilder.array([]),
    });
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const controlArray: FormArray = this.optionalInformationFormControl.get(
      formControlName
    ) as FormArray;

    if (e.target.checked) {
      controlArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      controlArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          controlArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  sendDataToServer(): void {
    let property: Property = {
      prpType: this.proprieteFormControl.get('prpType').value,
      annType: this.proprieteFormControl.get('annType').value,
      jrcType: this.proprieteFormControl.get('jrcType').value,
      willaya: this.proprieteFormControl.get('willaya').value,
      address: this.proprieteFormControl.get('address').value,
      etage: this.proprieteFormControl.get('etage').value,
      facade: this.proprieteFormControl.get('facade').value,
      price: this.proprieteFormControl.get('price').value,
      surface: this.proprieteFormControl.get('surface').value,
      etatType: this.proprieteFormControl.get('etatType').value,
      meublee: this.proprieteFormControl.get('meublee').value,
      negociable: this.proprieteFormControl.get('negociable').value,
      service: this.optionalInformationFormControl.get('service').value,
      hygiene: this.optionalInformationFormControl.get('hygiene').value,
      piece: this.optionalInformationFormControl.get('pieces').value,
      servicePublic:
        this.optionalInformationFormControl.get('servicePublic').value,
      climatisation:
        this.optionalInformationFormControl.get('climatisation').value,
      chauffage: this.optionalInformationFormControl.get('chauffage').value,
      cuisin: this.optionalInformationFormControl.get('cuisin').value,
      disponible: this.optionalInformationFormControl.get('disponible').value,
      description: this.optionalInformationFormControl.get('description').value,
      avances: this.optionalInformationFormControl.get('avances').value,
      etatCity: this.optionalInformationFormControl.get('city').value,
    };

    this.store.dispatch(SpinnerAction({ status: true }));
    setTimeout(() => {
      this.store.dispatch(
        CreateAnnonce({
          property: property,
          files: this.images.value,
        })
      );
    }, 5000);
  }
}
