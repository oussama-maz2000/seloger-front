import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';
import {
  willaya,
  serviceAccessibilityList,
  hygieneList,
  piecesList,
  publicServcieList,
  quillConfig,
} from 'src/app/core/shared/data';

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
  quillConfig: any;

  proprietaireFormControl: FormGroup;
  proprieteFormControl: FormGroup;
  optionalInformationFormControl: FormGroup;
  uploadFilesFormControl: FormGroup;
  checkProprietaireFormValidation: boolean = false;
  checkProprieteFormValidation: boolean = false;
  showProfilTab: string = 'tab-pane fade show active';
  showProprieteTab: string = 'tab-pane fade';
  showOptionalTab: string = 'tab-pane fade ';
  profileBtn: string = 'nav-link active';
  proprieteBtn: string = 'nav-link';
  optionalBtn: string = 'nav-link ';

  constructor(
    private formBuilder: FormBuilder,
    private annonceService: AnnounceService
  ) {}

  ngOnInit(): void {
    this.serviceAccessibilityList = serviceAccessibilityList;
    this.hygieneList = hygieneList;
    this.piecesList = piecesList;
    this.publicServcieList = publicServcieList;
    this.willays = willaya;
    this.quillConfig = quillConfig;

    this.createProfileProprietaireForm();
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

  nextToPropriete(): void {
    if (this.onSubmitProprietaire()) {
      this.showProprieteTab = 'tab-pane fade active show';
      this.showProfilTab = 'tab-pane fade';
      this.profileBtn = 'nav-link';
      this.proprieteBtn = 'nav-link active';
    }
  }
  nextToOptional(): void {
    if (this.onSubmitPropriete()) {
      this.showProprieteTab = 'tab-pane fade';
      this.showOptionalTab = 'tab-pane fade active show';

      this.proprieteBtn = 'nav-link ';

      this.optionalBtn = 'nav-link active';
    }
  }

  backToProfile(): void {
    this.showProprieteTab = 'tab-pane fade';
    this.showProfilTab = 'tab-pane fade active show';

    this.profileBtn = 'nav-link active';
    this.proprieteBtn = 'nav-link';
  }
  backToPropriete(): void {
    this.showProprieteTab = 'tab-pane fade active show';
    this.showOptionalTab = 'tab-pane fade ';

    this.proprieteBtn = 'nav-link active';
    this.optionalBtn = 'nav-link ';
  }

  /* submit the forms */

  onSubmitProprietaire(): boolean {
    this.checkProprietaireFormValidation = true;
    return this.proprietaireFormControl.valid;
  }

  onSubmitPropriete(): boolean {
    this.checkProprieteFormValidation = true;

    return this.proprieteFormControl.valid;
  }

  onSubmitOptionalInformation(): boolean {
    return this.optionalInformationFormControl.valid;
  }

  /* creation of the form controlers */

  createProfileProprietaireForm() {
    this.proprietaireFormControl = this.formBuilder.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      phone: [, [Validators.required]],
    });
  }

  createProprieteForm() {
    this.proprieteFormControl = this.formBuilder.group({
      prpType: [, [Validators.required]],
      annType: [, [Validators.required]],
      jrcType: [, [Validators.required]],
      willaya: [, [Validators.required]],
      address: [, [Validators.required]],
      etage: [, [Validators.required, Validators.min(0)]],
      facade: [, [Validators.required, Validators.min(0)]],
      price: [, [Validators.required, Validators.min(0)]],
      surface: [, [Validators.required, Validators.min(0)]],
      service: this.formBuilder.array([]),
      hygiene: this.formBuilder.array([]),
      pieces: this.formBuilder.array([]),
      servicePublic: this.formBuilder.array([]),
      climatisation: ['Non exist'],
      chauffage: ['Chemini'],
      cuisin: ['Séparer'],
      disponible: [],
      description: [],
    });
  }

  createOptionalInformationForm() {
    this.optionalInformationFormControl = this.formBuilder.group({
      serviceAccessibilite: this.formBuilder.array([]),
      hygiene: this.formBuilder.array([]),
      pieces: this.formBuilder.array([]),
      servicePublic: this.formBuilder.array([]),
      climatisation: ['Non exist'],
      chauffage: ['Chemini'],
      cuisin: ['Séparer'],
      disponibilite: [],
      description: [],
    });
  }

  createUploadsFileForm() {
    this.uploadFilesFormControl = this.formBuilder.group({
      images: this.formBuilder.array([]),
    });
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const controlArray: FormArray = this.proprieteFormControl.get(
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
    const combinedData = {
      proprietaire: this.proprietaireFormControl.value,
      propriete: this.proprieteFormControl.value,
    };
    console.log(combinedData);

    this.annonceService
      .addProprietaireWithPropriete(combinedData, this.images.value)
      .subscribe(
        (response) => {
          // Handle success
          console.log('Data sent successfully', response);
        },
        (error) => {
          // Handle error
          console.error('Error sending data', error);
        }
      );
  }
}
