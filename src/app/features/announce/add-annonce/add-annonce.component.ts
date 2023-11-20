import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  proprietaireFormControl: FormGroup;
  annonceFormControl: FormGroup;
  optionalAnnounceFormControl: FormGroup;

  checkProprietaireFormValidation: boolean = false;

  showProfilTab: string = 'tab-pane fade show active';
  showAnnonceTab: string = 'tab-pane fade';
  showOptionalTab: string = 'tab-pane fade';
  profileBtn: string = 'nav-link active';
  annonceBtn: string = 'nav-link';
  optionalBtn: string = 'nav-link';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.serviceAccessibilityList = serviceAccessibilityList;
    this.hygieneList = hygieneList;
    this.piecesList = piecesList;
    this.publicServcieList = publicServcieList;
    this.willays = willaya;

    this.createProfileProprietaireForm();
    this.createAnnonceForm();
  }

  onSelect(event: any): void {
    /* if (event.addedFiles[0].size < 2222222222) {
      this.files.push(...event.addedFiles);
    } */
    /*  const imageArray = this.fromRequired.get('images') as FormArray; */
    this.files.push(...event.addedFiles);
    for (const file of this.files) {
      /*  imageArray.push(new FormControl(file)); */
    }
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  preventClose(event: Event): void {
    event.stopPropagation();
  }

  nextToAnnonce(): void {
    if (this.onSubmitProprietaire()) {
      this.showAnnonceTab = 'tab-pane fade active show';
      this.showProfilTab = 'tab-pane fade';
      this.profileBtn = 'nav-link';
      this.annonceBtn = 'nav-link active';
    }
  }
  nextToOptional(): void {
    this.showAnnonceTab = 'tab-pane fade';
    this.showOptionalTab = 'tab-pane fade active show';

    this.annonceBtn = 'nav-link ';

    this.optionalBtn = 'nav-link active';

    this.onSubmitAnnonce();
  }

  backToProfile(): void {
    this.showAnnonceTab = 'tab-pane fade';
    this.showProfilTab = 'tab-pane fade active show';

    this.profileBtn = 'nav-link active';
    this.annonceBtn = 'nav-link';
  }
  backToAnnonce(): void {
    this.showAnnonceTab = 'tab-pane fade active show';
    this.showOptionalTab = 'tab-pane fade ';

    this.annonceBtn = 'nav-link active';
    this.optionalBtn = 'nav-link ';
  }

  onSubmitProprietaire(): boolean {
    console.log(this.proprietaireFormControl.value);
    this.checkProprietaireFormValidation = true;
    return this.proprietaireFormControl.valid;
  }

  onSubmitAnnonce() {
    console.log(this.annonceFormControl.value);
    console.log(this.annonceFormControl.errors);

    console.log(this.annonceFormControl.valid);
  }

  createProfileProprietaireForm() {
    this.proprietaireFormControl = this.formBuilder.group({
      nom: [, Validators.required],
      prenom: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      address: [, [Validators.required]],
    });
  }

  createAnnonceForm() {
    this.annonceFormControl = this.formBuilder.group({
      typeProperty: ['Maison', [Validators.required]],
      typeAnnonce: ['A vendre', [Validators.required]],
      typeJuridic: ['Maison', [Validators.required]],
      willaya: ['Tous'],
      address: [, [Validators.required]],
      etage: [, [Validators.required, Validators.min(0)]],
      facade: [, [Validators.required, Validators.min(0)]],
      prix: [, [Validators.required, Validators.min(0)]],
      surface: [, [Validators.required, Validators.min(0)]],
      images: [],
    });
  }
}
